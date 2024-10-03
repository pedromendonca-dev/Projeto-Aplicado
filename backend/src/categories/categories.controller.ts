import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }

  @Post()
  createCategory(@Body() categoryDto: any) {
    return this.categoriesService.createCategory(categoryDto);
  }

  @Put(':id')
  updateCategory(@Param('id') id: string, @Body() categoryDto: any) {
    return this.categoriesService.updateCategory(id, categoryDto);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }
}