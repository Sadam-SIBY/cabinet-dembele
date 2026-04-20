<?php

namespace App\Controller;

use App\Entity\Appointment;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/appointments', name: 'api_appointments_')]
class AppointmentController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly ValidatorInterface $validator,
    ) {}

    #[Route('', name: 'create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return $this->json(['error' => 'Invalid JSON'], Response::HTTP_BAD_REQUEST);
        }

        $appointment = (new Appointment())
            ->setClientName($data['clientName'] ?? '')
            ->setClientEmail($data['clientEmail'] ?? '')
            ->setClientPhone($data['clientPhone'] ?? null)
            ->setServiceType($data['serviceType'] ?? '')
            ->setScheduledAt(new \DateTime($data['scheduledAt'] ?? 'now'))
            ->setNotes($data['notes'] ?? null);

        $errors = $this->validator->validate($appointment);
        if (count($errors) > 0) {
            $messages = [];
            foreach ($errors as $error) {
                $messages[$error->getPropertyPath()] = $error->getMessage();
            }
            return $this->json(['errors' => $messages], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $this->em->persist($appointment);
        $this->em->flush();

        return $this->json(['success' => true, 'id' => $appointment->getId()], Response::HTTP_CREATED);
    }

    #[Route('/upcoming', name: 'upcoming', methods: ['GET'])]
    public function upcoming(): JsonResponse
    {
        $appointments = $this->em->getRepository(Appointment::class)->findUpcoming();

        return $this->json(
            array_map(fn(Appointment $a) => [
                'id'          => $a->getId(),
                'clientName'  => $a->getClientName(),
                'serviceType' => $a->getServiceType(),
                'scheduledAt' => $a->getScheduledAt()->format('Y-m-d H:i'),
                'status'      => $a->getStatus(),
            ], $appointments)
        );
    }
}
