/*
  Warnings:

  - You are about to drop the `tarefa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tarefa";

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "duration" BIGINT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
