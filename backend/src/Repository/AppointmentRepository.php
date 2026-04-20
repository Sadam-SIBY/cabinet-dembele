<?php

namespace App\Repository;

use App\Entity\Appointment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Appointment>
 */
class AppointmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Appointment::class);
    }

    public function findUpcoming(): array
    {
        return $this->createQueryBuilder('a')
            ->where('a.scheduledAt >= :now')
            ->andWhere('a.status != :cancelled')
            ->setParameter('now', new \DateTimeImmutable())
            ->setParameter('cancelled', 'cancelled')
            ->orderBy('a.scheduledAt', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
