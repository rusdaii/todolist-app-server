-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_todosId_fkey";

-- DropForeignKey
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_userId_fkey";

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_todosId_fkey" FOREIGN KEY ("todosId") REFERENCES "Todos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
