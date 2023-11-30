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
