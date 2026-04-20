<?php

namespace App\Controller;

use App\DTO\ContactMessageDTO;
use App\Entity\ContactMessage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api', name: 'api_')]
class ContactController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly ValidatorInterface $validator,
        private readonly MailerInterface $mailer,
    ) {}

    #[Route('/contact', name: 'contact_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];

        $dto = new ContactMessageDTO();
        $dto->firstName = $data['firstName'] ?? '';
        $dto->lastName  = $data['lastName']  ?? '';
        $dto->email     = $data['email']     ?? '';
        $dto->phone     = $data['phone']     ?? null;
        $dto->subject   = $data['subject']   ?? '';
        $dto->message   = $data['message']   ?? '';

        $errors = $this->validator->validate($dto);
        if (count($errors) > 0) {
            $messages = [];
            foreach ($errors as $error) {
                $messages[$error->getPropertyPath()] = $error->getMessage();
            }
            return $this->json(['errors' => $messages], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $entity = (new ContactMessage())
            ->setFirstName($dto->firstName)
            ->setLastName($dto->lastName)
            ->setEmail($dto->email)
            ->setPhone($dto->phone)
            ->setSubject($dto->subject)
            ->setMessage($dto->message);

        $this->em->persist($entity);
        $this->em->flush();

        $this->sendNotificationEmail($entity);

        return $this->json([
            'success' => true,
            'message' => 'Votre message a été envoyé avec succès.',
        ], Response::HTTP_CREATED);
    }

    private function sendNotificationEmail(ContactMessage $msg): void
    {
        try {
            $email = (new Email())
                ->from('noreply@cabinet-dembele.com')
                ->to('contact@cabinet-dembele.com')
                ->subject("Nouveau message — {$msg->getSubject()}")
                ->text(
                    "De: {$msg->getFullName()} <{$msg->getEmail()}>\n"
                    . "Téléphone: {$msg->getPhone()}\n"
                    . "Objet: {$msg->getSubject()}\n\n"
                    . $msg->getMessage()
                );
            $this->mailer->send($email);
        } catch (\Exception) {
            // Log silently — message is already saved
        }
    }

    #[Route('/contact', name: 'contact_list', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $messages = $this->em->getRepository(ContactMessage::class)->findRecent();

        return $this->json(
            array_map(fn(ContactMessage $m) => [
                'id'        => $m->getId(),
                'fullName'  => $m->getFullName(),
                'email'     => $m->getEmail(),
                'subject'   => $m->getSubject(),
                'status'    => $m->getStatus(),
                'createdAt' => $m->getCreatedAt()->format('Y-m-d H:i'),
            ], $messages)
        );
    }
}
