<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class ContactMessageDTO
{
    #[Assert\NotBlank(message: 'Le prénom est requis.')]
    #[Assert\Length(max: 100)]
    public string $firstName = '';

    #[Assert\NotBlank(message: 'Le nom est requis.')]
    #[Assert\Length(max: 100)]
    public string $lastName = '';

    #[Assert\NotBlank(message: "L'email est requis.")]
    #[Assert\Email(message: 'Adresse email invalide.')]
    public string $email = '';

    #[Assert\Length(max: 30)]
    public ?string $phone = null;

    #[Assert\NotBlank(message: "L'objet est requis.")]
    #[Assert\Length(max: 100)]
    public string $subject = '';

    #[Assert\NotBlank(message: 'Le message est requis.')]
    #[Assert\Length(min: 10, max: 5000, minMessage: 'Le message doit contenir au moins 10 caractères.')]
    public string $message = '';
}
