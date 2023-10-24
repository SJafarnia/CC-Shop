/*
  Warnings:

  - Added the required column `buyerEmail` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardName` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardType` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "buyerEmail" TEXT NOT NULL,
ADD COLUMN     "cardName" TEXT NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "cardType" TEXT NOT NULL;
