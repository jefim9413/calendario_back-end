/*
  Warnings:

  - You are about to alter the column `duration` on the `task` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "task" ALTER COLUMN "duration" SET DATA TYPE INTEGER;