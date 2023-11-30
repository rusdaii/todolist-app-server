const prisma = require('../../src/lib/prisma');

const seedUser = require('./user');
const seedTodo = require('./todo');
const seedTask = require('./task');

async function main() {
  await seedUser();
  await seedTodo();
  await seedTask();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
