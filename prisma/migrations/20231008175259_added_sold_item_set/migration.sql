/*
  Warnings:

  - Added the required column `heroSetTitle` to the `soldItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "soldItem" ADD COLUMN     "heroSetTitle" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "soldItem" ADD CONSTRAINT "soldItem_heroSetTitle_fkey" FOREIGN KEY ("heroSetTitle") REFERENCES "HeroSet"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
