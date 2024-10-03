import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: any) {
    const result = await this.usersService.create(user);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Get()
  async findAll(@Res() response: Response) {
    const result = await this.usersService.findAll();
    return response.json(result.data);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result = await this.usersService.findOne(id);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: any) {
    const result = await this.usersService.update(id, user);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.usersService.remove(id);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }
}
