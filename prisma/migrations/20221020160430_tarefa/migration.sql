-- CreateTable
CREATE TABLE "tarefa" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "Duration" BIGINT NOT NULL,

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);
