const prisma = require('../../src/lib/prisma');

const users = [
  {
    user: {
      id: '3996d618-337e-46b5-9642-d3064005ba53',
      username: 'rusdaii',
      password: '$2a$10$GT/nNgM2NJ7ev9Xn793gBOoz1MuNmv2JoKUxMaXM50YFnnU5.qZt.',
    },
  },
  {
    user: {
      id: 'a8b9e9b0-9b9e-9b9e-9b9e-9b9e9b0a8b9e',
      username: 'rusdaii1',
      password: '$2a$10$GT/nNgM2NJ7ev9Xn793gBOoz1MuNmv2JoKUxMaXM50YFnnU5.qZt.',
    },
  },
];

const seedUser = async () => {
  await Promise.all(
    users.map(async ({ user }) => {
      await prisma.user.upsert({
        where: {
          id: user.id,
        },
        create: user,
        update: {},
      });
    })
  );
};

module.exports = seedUser;
