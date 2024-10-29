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
import { CategorysService } from './categorys.service';
import { Response } from 'express';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Post()
  async create(@Body() user: any) {
    const result = await this.categorysService.create(user);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Get()
  async findAll(@Res() response: Response) {
    const result = await this.categorysService.findAll();
    return response.json(result.data);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const result = await this.categorysService.findOne(id);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: any) {
    const result = await this.categorysService.update(id, user);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.categorysService.remove(id);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }
}
