const prisma = require('../lib/prisma');

const NotFoundError = require('../exeptions/NotFoundError');

class TodoService {
  static getAllTodos = async (userId) => {
    const todos = await prisma.todos.findMany({
      where: {
        userId: userId,
      },
      // include: {
      //   tasks: true,
      // },
    });

    return todos;
  };

  static getTodo = async (todoId, userId) => {
    const todo = await prisma.todos.findUnique({
      where: {
        id: todoId,
        userId,
      },
      // include: {
      //   tasks: true,
      // },
    });

    if (!todo) {
      throw new NotFoundError('Todo not found');
    }

    return todo;
  };

  static createTodo = async (userId, payload) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const todo = await prisma.todos.create({
      data: {
        ...payload,
        userId,
      },
    });

    return todo;
  };

  static updateTodo = async (todoId, userId, payload) => {
    const todo = await prisma.todos.findFirst({
      where: {
        id: todoId,
        userId,
      },
    });

    if (!todo) {
      throw new NotFoundError('Todo not found');
    }

    const updateTodo = await prisma.todos.update({
      where: {
        id: todoId,
        userId,
      },
      data: payload,
    });

    return updateTodo;
  };

  static deleteTodo = async (todoId, userId) => {
    const todo = await prisma.todos.findFirst({
      where: {
        id: todoId,
        userId,
      },
    });

    if (!todo) {
      throw new NotFoundError('Todo not found');
    }

    await prisma.todos.delete({
      where: {
        id: todo.id,
      },
    });
  };
}

module.exports = TodoService;
