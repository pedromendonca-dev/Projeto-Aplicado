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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('categorys') // Adiciona a tag 'categorys' para o Swagger
@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: 201, description: 'Category created successfully.' })
  async create(@Body() user: any) {
    const result = await this.categorysService.create(user);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'List of categories.' })
  async findAll(@Res() response: Response) {
    const result = await this.categorysService.findAll();
    return response.json(result.data);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by id' })
  @ApiResponse({ status: 200, description: 'Category details.' })
  async findOne(@Param('id') id: number) {
    const result = await this.categorysService.findOne(id);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a category by id' })
  @ApiResponse({ status: 200, description: 'Category updated successfully.' })
  async update(@Param('id') id: number, @Body() user: any) {
    const result = await this.categorysService.update(id, user);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a category by id' })
  @ApiResponse({ status: 200, description: 'Category deleted successfully.' })
  async remove(@Param('id') id: number) {
    const result = await this.categorysService.remove(id);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data;
  }
}
