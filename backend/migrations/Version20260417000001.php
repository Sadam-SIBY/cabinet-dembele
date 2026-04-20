<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260417000001 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create contact_messages and appointments tables';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE contact_messages (
            id INT AUTO_INCREMENT NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(180) NOT NULL,
            phone VARCHAR(30) DEFAULT NULL,
            subject VARCHAR(100) NOT NULL,
            message LONGTEXT NOT NULL,
            status VARCHAR(20) NOT NULL DEFAULT \'new\',
            created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\',
            read_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\',
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

        $this->addSql('CREATE TABLE appointments (
            id INT AUTO_INCREMENT NOT NULL,
            client_name VARCHAR(100) NOT NULL,
            client_email VARCHAR(180) NOT NULL,
            client_phone VARCHAR(30) DEFAULT NULL,
            service_type VARCHAR(100) NOT NULL,
            scheduled_at DATETIME NOT NULL,
            notes LONGTEXT DEFAULT NULL,
            status VARCHAR(20) NOT NULL DEFAULT \'pending\',
            created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\',
            PRIMARY KEY(id)
        ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE appointments');
        $this->addSql('DROP TABLE contact_messages');
    }
}
