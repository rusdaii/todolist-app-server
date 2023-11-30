const NotFoundError = require('../exeptions/NotFoundError');

class TaskService {
  static createTask = async (todoId, payload) => {
    const todo = await prisma.todos.findUnique({
      where: {
        id: todoId,
      },
    });

    if (!todo) {
      throw new NotFoundError('Todo not found');
    }

    const task = await prisma.tasks.create({
      data: {
        taskName: payload.taskName,
        todos: {
          connect: {
            id: todoId,
          },
        },
      },
    });

    return task;
  };

  static updateTask = async (todoId, taskId, userId, payload) => {
    const task = await prisma.tasks.findFirst({
      where: {
        id: taskId,
        todos: {
          id: todoId,
          userId,
        },
      },
    });

    if (!task) {
      throw new NotFoundError('Task not found');
    }

    const updateTask = await prisma.tasks.update({
      where: {
        id: taskId,
      },
      data: {
        ...payload,
      },
    });

    return updateTask;
  };

  static deleteTask = async (todoId, taskId, userId) => {
    const task = await prisma.tasks.findFirst({
      where: {
        id: taskId,
        todos: {
          id: todoId,
          userId,
        },
      },
    });

    if (!task) {
      throw new NotFoundError('Task not found');
    }

    await prisma.tasks.delete({
      where: {
        id: taskId,
      },
    });
  };
}

module.exports = TaskService;
