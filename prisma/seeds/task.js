const prisma = require('../../src/lib/prisma');

const tasksData = [
  {
    id: '02a96975-045d-4c0a-9a23-412bdc3c8ad8',
    taskName: 'Design ERD',
    status: 'ONPROGRESS',
    todosId: 'fae6af83-a449-41f8-bc16-033de256e7e8',
  },
  {
    id: '5edfe078-9d70-432d-8922-d9f2052aff60',
    taskName: 'Design UI',
    status: 'COMPLETED',
    todosId: 'fae6af83-a449-41f8-bc16-033de256e7e8',
  },
  {
    id: '6705c42f-cc23-4bb5-9619-76463d4a0c29',
    taskName: 'Develop Backend',
    status: 'CREATED',
    todosId: 'fae6af83-a449-41f8-bc16-033de256e7e8',
  },
  {
    id: 'd03480b5-d5b8-406d-9e24-133cd737388c',
    taskName: 'Read OOP module',
    status: 'ONPROGRESS',
    todosId: '070bd216-f637-439a-a518-a6d3e6925800',
  },
  {
    id: '19da760a-440a-4e02-9264-9990342445d0',
    taskName: 'Read function module',
    status: 'COMPLETED',
    todosId: '070bd216-f637-439a-a518-a6d3e6925800',
  },
  {
    id: 'f0fcb084-50cd-4eaf-99a7-502ea6b3686f',
    taskName: 'Read array module',
    status: 'COMPLETED',
    todosId: '070bd216-f637-439a-a518-a6d3e6925800',
  },
  {
    id: 'df978119-9101-472b-a3de-e7a38d00c29a',
    taskName: 'Watch Harry Potter',
    status: 'ONPROGRESS',
    todosId: '869dcd78-f454-4859-87ef-e75a628bb6c0',
  },
  {
    id: 'abc92e1e-ba64-4bc5-b484-d11b5e3856a5',
    taskName: 'Watch Game of Thrones',
    status: 'COMPLETED',
    todosId: '869dcd78-f454-4859-87ef-e75a628bb6c0',
  },
  {
    id: '27c61bb1-2cea-4fa3-89cb-30b31ce37b6b',
    taskName: 'Watch Breaking Bad',
    status: 'COMPLETED',
    todosId: '869dcd78-f454-4859-87ef-e75a628bb6c0',
  },
];

const seedTasks = async () => {
  await Promise.all(
    tasksData.map(async (task) => {
      await prisma.tasks.upsert({
        where: {
          id: task.id,
        },
        create: task,
        update: {},
      });
    })
  );
};

module.exports = seedTasks;
