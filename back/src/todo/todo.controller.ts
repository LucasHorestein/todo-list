import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('todo')
@ApiTags('Todo')
@ApiSecurity('JWT-auth')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(
    @Body(ValidationPipe) createTodoDto: CreateTodoDto
    
  ) {
    return this.todoService.create(createTodoDto);
  }

  @Get('/findAllNotCompleted/')
  findAllTodosByUserIdNotCompleted() {
    return this.todoService.findAllTodoByUserNotCompleted();
  }

  @Get('/findAllCompleted/')
  findAllTodosByUserIdCompleted() {
    return this.todoService.findAllTodoByUserCompleted();
  }

  @Patch(':id')
  update(@Param('id') id: number) {
    return this.todoService.update(Number(id));
  }

  @Put(':id')
  updateData(@Param('id') id: number, @Body('title') title:string) {
    return this.todoService.updateData(Number(id), String(title));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(Number(id));
  }
}
