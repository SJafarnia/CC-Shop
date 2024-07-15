-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_buyerEmail_fkey";

-- DropForeignKey
ALTER TABLE "soldItem" DROP CONSTRAINT "soldItem_buyerEmail_fkey";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "buyerEmail" DROP NOT NULL;

-- AlterTable
ALTER TABLE "soldItem" ALTER COLUMN "buyerEmail" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "soldItem" ADD CONSTRAINT "soldItem_buyerEmail_fkey" FOREIGN KEY ("buyerEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_buyerEmail_fkey" FOREIGN KEY ("buyerEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
