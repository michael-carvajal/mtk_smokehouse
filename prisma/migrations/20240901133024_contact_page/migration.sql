/*
  Warnings:

  - You are about to drop the `ContactUs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ContactUs";

-- CreateTable
CREATE TABLE "ContactPage" (
    "id" SERIAL NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "Monday" TEXT,
    "Tuesday" TEXT,
    "Wednesday" TEXT,
    "Thursday" TEXT,
    "Friday" TEXT,
    "Saturday" TEXT,
    "Sunday" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactPage_pkey" PRIMARY KEY ("id")
);
