<?php

namespace App\Entity;

use App\Repository\AppointmentRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: AppointmentRepository::class)]
#[ORM\Table(name: 'appointments')]
#[ORM\HasLifecycleCallbacks]
class Appointment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank]
    private string $clientName;

    #[ORM\Column(length: 180)]
    #[Assert\NotBlank]
    #[Assert\Email]
    private string $clientEmail;

    #[ORM\Column(length: 30, nullable: true)]
    private ?string $clientPhone = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank]
    private string $serviceType;

    #[ORM\Column(type: 'datetime')]
    #[Assert\NotNull]
    private \DateTimeInterface $scheduledAt;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $notes = null;

    #[ORM\Column(length: 20, options: ['default' => 'pending'])]
    private string $status = 'pending';

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\PrePersist]
    public function onPrePersist(): void
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int { return $this->id; }
    public function getClientName(): string { return $this->clientName; }
    public function setClientName(string $v): static { $this->clientName = $v; return $this; }
    public function getClientEmail(): string { return $this->clientEmail; }
    public function setClientEmail(string $v): static { $this->clientEmail = $v; return $this; }
    public function getClientPhone(): ?string { return $this->clientPhone; }
    public function setClientPhone(?string $v): static { $this->clientPhone = $v; return $this; }
    public function getServiceType(): string { return $this->serviceType; }
    public function setServiceType(string $v): static { $this->serviceType = $v; return $this; }
    public function getScheduledAt(): \DateTimeInterface { return $this->scheduledAt; }
    public function setScheduledAt(\DateTimeInterface $v): static { $this->scheduledAt = $v; return $this; }
    public function getNotes(): ?string { return $this->notes; }
    public function setNotes(?string $v): static { $this->notes = $v; return $this; }
    public function getStatus(): string { return $this->status; }
    public function setStatus(string $v): static { $this->status = $v; return $this; }
    public function getCreatedAt(): \DateTimeImmutable { return $this->createdAt; }
}
