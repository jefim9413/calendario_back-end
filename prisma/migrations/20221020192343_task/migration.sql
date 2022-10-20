-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
