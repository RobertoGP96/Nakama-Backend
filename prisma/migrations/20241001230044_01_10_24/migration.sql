-- CreateEnum
CREATE TYPE "Department" AS ENUM ('ACTOR', 'DIRECTOR', 'ESCRITOR', 'PRODUCTOR');

-- CreateEnum
CREATE TYPE "categoryName" AS ENUM ('Película', 'Serie', 'Novela', 'Documental', 'Dorama', 'Anime', 'Reality', 'Show');

-- CreateEnum
CREATE TYPE "genreName" AS ENUM ('Acción', 'Aventura', 'Animado', 'Comedia', 'Crimen', 'Documental', 'Drama', 'Fantasía', 'Histórico', 'Horror', 'Musical', 'Misterio', 'Romance', 'Sci-Fi', 'Thriller', 'Bélica', 'Oeste', 'Familia', 'TV');

-- CreateTable
CREATE TABLE "Api_Key" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Api_Key_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contents" INTEGER[],
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
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
    "imdb_id" TEXT NOT NULL,
    "tmdb_id" TEXT NOT NULL,
    "omdb_id" TEXT NOT NULL,

    CONSTRAINT "externalids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "genres" "genreName"[],
    "elementId" INTEGER NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metadata" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL DEFAULT '',
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
    "year" TEXT NOT NULL,
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
CREATE TABLE "PreSave" (
    "id" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "pre_elements" TEXT[],
    "save_elements" INTEGER[],
    "resource_id" INTEGER NOT NULL,

    CONSTRAINT "PreSave_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Query" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "state" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "elements" INTEGER[],

    CONSTRAINT "Query_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "id" SERIAL NOT NULL,
    "imdb_rating" DECIMAL(65,30) NOT NULL,
    "imdb_votes" INTEGER NOT NULL,
    "rotten_rating" DECIMAL(65,30) NOT NULL,
    "rotten_votes" INTEGER NOT NULL,
    "mc_rating" DECIMAL(65,30) NOT NULL,
    "mc_votes" INTEGER NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL,
    "elementId" INTEGER NOT NULL,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "addres" TEXT NOT NULL,
    "device" TEXT NOT NULL DEFAULT '',
    "type" "categoryName" NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Api_Key_name_key" ON "Api_Key"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Api_Key_token_key" ON "Api_Key"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Credits_elementId_key" ON "Credits"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "externalids_elementId_key" ON "externalids"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_elementId_key" ON "Genre"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "Metadata_elementId_key" ON "Metadata"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "Element_id_key" ON "Element"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Element_title_key" ON "Element"("title");

-- CreateIndex
CREATE UNIQUE INDEX "PreSave_resource_id_key" ON "PreSave"("resource_id");

-- CreateIndex
CREATE UNIQUE INDEX "Query_id_key" ON "Query"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ratings_elementId_key" ON "Ratings"("elementId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_id_key" ON "Resource"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_addres_key" ON "Resource"("addres");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- AddForeignKey
ALTER TABLE "Cast" ADD CONSTRAINT "Cast_creditsId_fkey" FOREIGN KEY ("creditsId") REFERENCES "Credits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credits" ADD CONSTRAINT "Credits_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "externalids" ADD CONSTRAINT "externalids_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metadata" ADD CONSTRAINT "Metadata_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiList" ADD CONSTRAINT "MiList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreSave" ADD CONSTRAINT "PreSave_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Query" ADD CONSTRAINT "Query_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element"("id") ON DELETE CASCADE ON UPDATE CASCADE;
