/*
  Warnings:

  - You are about to drop the `Tast` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tast";

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
