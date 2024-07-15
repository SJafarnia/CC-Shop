/*
  Warnings:

  - You are about to drop the column `buyerId` on the `soldItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "soldItem" DROP CONSTRAINT "soldItem_buyerId_buyerEmail_fkey";

-- AlterTable
ALTER TABLE "soldItem" DROP COLUMN "buyerId",
ALTER COLUMN "dateDelivered" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "soldItem" ADD CONSTRAINT "soldItem_buyerEmail_fkey" FOREIGN KEY ("buyerEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
