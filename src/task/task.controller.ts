import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }
  @Get(':id')
  async getOneTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    const task = await this.taskService.getTaskById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Put(':id')
  async updateTask(
    @Body() task: Task,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Task> {
    try {
      return await this.taskService.updateTask(id, task);
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }
  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    try {
      return await this.taskService.deleteTask(id);
    } catch (error) {
      throw new NotFoundException('Task not found');
    }
  }
}
