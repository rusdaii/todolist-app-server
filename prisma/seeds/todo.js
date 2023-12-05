const prisma = require('../../src/lib/prisma');

const todos = [
  {
    id: 'fae6af83-a449-41f8-bc16-033de256e7e8',
    userId: '3996d618-337e-46b5-9642-d3064005ba53',
    title: 'Create personal web',
  },
  {
    id: '070bd216-f637-439a-a518-a6d3e6925800',
    userId: '3996d618-337e-46b5-9642-d3064005ba53',
    title: 'Learn Javascript',
  },
  {
    id: '869dcd78-f454-4859-87ef-e75a628bb6c0',
    userId: '3996d618-337e-46b5-9642-d3064005ba53',
    title: 'Watch Movie',
  },
  {
    id: 'c6a7e5c9-8b7b-4b9b-8b7b-8b7b8b7b8b7b',
    userId: 'a8b9e9b0-9b9e-9b9e-9b9e-9b9e9b0a8b9e',
    title: 'Buy a new book',
  },
  {
    id: '471c2ae4-08f1-4ca4-be37-f6525329aeac',
    userId: 'a8b9e9b0-9b9e-9b9e-9b9e-9b9e9b0a8b9e',
    title: 'Buy a new laptop',
  },
  {
    id: 'e6d645fe-a1da-45b1-85fa-71cfa93b142e',
    userId: 'a8b9e9b0-9b9e-9b9e-9b9e-9b9e9b0a8b9e',
    title: 'Repair my car',
  },
];

const seedTodos = async () => {
  await Promise.all(
    todos.map(async (todo) => {
      await prisma.todos.upsert({
        where: {
          id: todo.id,
        },
        create: todo,
        update: {},
      });
    })
  );
};

module.exports = seedTodos;
