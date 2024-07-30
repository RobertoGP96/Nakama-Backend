/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Department" AS ENUM ('ACTOR', 'DIRECTOR', 'ESCRITOR', 'PRODUCTOR');

-- CreateEnum
CREATE TYPE "categoryName" AS ENUM ('Película', 'Serie', 'Novela', 'Documental', 'Dorama', 'Anime', 'Reality', 'Show');

-- CreateEnum
CREATE TYPE "companyName" AS ENUM ('IMDB', 'TMDB', 'OMDB', 'RottemTomatoes');

-- CreateEnum
CREATE TYPE "genreName" AS ENUM ('Acción', 'Aventura', 'Animado', 'Comedia', 'Crimen', 'Documental', 'Drama', 'Fantasía', 'Histórico', 'Horror', 'Musical', 'Misterio', 'Romance', 'Sci-Fi', 'Thriller', 'Bélica', 'Oeste');

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "Cast" (
    "id" SERIAL NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "creditsId" INTEGER NOT NULL,
    "department" "Department" NOT NULL,

    CONSTRAINT "Cast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credits" (
    "id" SERIAL NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "elementId" INTEGER NOT NULL,

    CONSTRAINT "Credits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "externalids" (
    "id" SERIAL NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "elementId" INTEGER NOT NULL,

    CONSTRAINT "externalids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ids" (
    "id" TEXT NOT NULL,
    "name" "categoryName" NOT NULL,
    "externalidsId" INTEGER,

    CONSTRAINT "Ids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "name" "genreName" NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metadata" (
    "id" SERIAL NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "storage" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "duration" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "fps" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "resolution" TEXT NOT NULL DEFAULT '1080p',
    "codec" TEXT NOT NULL DEFAULT 'h264',
    "audio" TEXT NOT NULL DEFAULT 'es_ES',
    "subtitle" TEXT NOT NULL DEFAULT 'es_ES',
    "elementId" INTEGER NOT NULL,

    CONSTRAINT "Metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MiList" (
    "id" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "elements" INTEGER[],

    CONSTRAINT "MiList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Element" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "poster" TEXT NOT NULL,
    "backdrop" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "title_original" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "category" "categoryName" NOT NULL,
    "plot" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Element_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Query" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "elements" INTEGER[],

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "id" SERIAL NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "votes" INTEGER NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "elementId" INTEGER NOT NULL,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "e_founds_count" INTEGER NOT NULL DEFAULT 0,
    "e_pending_count" INTEGER NOT NULL DEFAULT 0,
    "e_founds" INTEGER[] DEFAULT ARRAY[]::INTEGER[]
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credits_elementId_key" ON "Credits"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "externalids_elementId_key" ON "externalids"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Metadata_elementId_key" ON "Metadata"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "MiList_userId_key" ON "MiList"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Element_title_key" ON "Element"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Ratings_elementId_key" ON "Ratings"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_address_key" ON "Resource"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- AddForeignKey
ALTER TABLE "Cast" ADD CONSTRAINT "Cast_creditsId_fkey" FOREIGN KEY ("creditsId") REFERENCES "Credits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credits" ADD CONSTRAINT "Credits_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "externalids" ADD CONSTRAINT "externalids_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ids" ADD CONSTRAINT "Ids_externalidsId_fkey" FOREIGN KEY ("externalidsId") REFERENCES "externalids"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metadata" ADD CONSTRAINT "Metadata_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiList" ADD CONSTRAINT "MiList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Query" ADD CONSTRAINT "Query_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
