import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './repo/todo.repository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    private todoRepository: TodoRepository,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    let todo: Todo = new Todo();
    todo.title = createTodoDto.title;
    todo.completed = false;
    return this.todoRepository.save(todo);
  }

  findAllTodoByUserNotCompleted() {
    return this.todoRepository.find({
      where: { completed: false },
    });
  }

  findAllTodoByUserCompleted() {
    return this.todoRepository.find({
      where: { completed: true },
    });
  }

  update(todoId: number) {
    return this.todoRepository.update(todoId, { completed: true });
  }

  updateData(todoId: number, title: string) {
    return this.todoRepository.update(todoId, { title: title});
  }

  remove(todoId: number) {
    return this.todoRepository.delete(todoId);
  }
}
