-- CreateTable
CREATE TABLE "HomePage" (
    "id" SERIAL NOT NULL,
    "featureOneTitle" TEXT,
    "featureOneBody" TEXT,
    "featureOneLink" TEXT,
    "featureTwoTitle" TEXT,
    "featureTwoBody" TEXT,
    "featureTwoLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomePage_pkey" PRIMARY KEY ("id")
);
