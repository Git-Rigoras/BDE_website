/*
  Warnings:

  - Made the column `ownerId` on table `Club` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Club` DROP FOREIGN KEY `Club_ownerId_fkey`;

-- AlterTable
ALTER TABLE `Club` MODIFY `ownerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ClubOwner` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `contact` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Club` ADD CONSTRAINT `Club_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `ClubOwner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
