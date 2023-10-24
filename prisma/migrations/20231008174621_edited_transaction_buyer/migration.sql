-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_buyerEmail_fkey" FOREIGN KEY ("buyerEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
