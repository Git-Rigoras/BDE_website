/*
  Warnings:

  - You are about to drop the column `owner` on the `Club` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Club` DROP COLUMN `owner`,
    ADD COLUMN `ownerId` VARCHAR(191) NULL,
    MODIFY `description` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `ClubOwner` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Club` ADD CONSTRAINT `Club_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `ClubOwner`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
