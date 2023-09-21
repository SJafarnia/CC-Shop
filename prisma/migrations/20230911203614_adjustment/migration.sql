-- CreateEnum
CREATE TYPE "accessLevel" AS ENUM ('BASIC', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "steamId" TEXT,
    "accessLevel" "accessLevel" NOT NULL DEFAULT 'BASIC',
    "profileImg" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SteamAccount" (
    "id" TEXT NOT NULL,

    CONSTRAINT "SteamAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroSet" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "hero" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "year" TEXT NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0,
    "isAvailable" BOOLEAN DEFAULT false,
    "description" TEXT,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "HeroSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroImg" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "setId" TEXT,

    CONSTRAINT "HeroImg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soldItem" (
    "id" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "buyerEmail" TEXT NOT NULL,
    "isDelivered" BOOLEAN NOT NULL DEFAULT false,
    "dateSold" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateDelivered" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "soldItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductComment" (
    "id" TEXT NOT NULL,
    "setId" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "ProductComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_steamId_key" ON "User"("steamId");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_email_key" ON "User"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "HeroSet_title_key" ON "HeroSet"("title");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_steamId_fkey" FOREIGN KEY ("steamId") REFERENCES "SteamAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroSet" ADD CONSTRAINT "HeroSet_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroImg" ADD CONSTRAINT "HeroImg_setId_fkey" FOREIGN KEY ("setId") REFERENCES "HeroSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soldItem" ADD CONSTRAINT "soldItem_buyerId_buyerEmail_fkey" FOREIGN KEY ("buyerId", "buyerEmail") REFERENCES "User"("id", "email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductComment" ADD CONSTRAINT "ProductComment_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductComment" ADD CONSTRAINT "ProductComment_setId_fkey" FOREIGN KEY ("setId") REFERENCES "HeroSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
