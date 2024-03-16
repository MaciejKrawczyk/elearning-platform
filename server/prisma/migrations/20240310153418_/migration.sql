/*
  Warnings:

  - You are about to drop the column `notes` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `ShelfCategory` table. All the data in the column will be lost.
  - Added the required column `description` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ShelfCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Company` DROP COLUMN `notes`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ShelfCategory` DROP COLUMN `notes`,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;
