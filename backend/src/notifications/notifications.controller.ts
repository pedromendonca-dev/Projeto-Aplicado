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
import { ServicesService } from './notifications.service';
import { Response } from 'express';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  async create(@Body() user: any) {
    const result = await this.servicesService.create(user);
    if (result.error) {
      throw new Error(result.error.message || 'Error creating service');
    }
    return result.data;
  }

  @Get()
  async findAll(@Res() response: Response) {
    const result = await this.servicesService.findAll();
    return response.json(result.data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.servicesService.findOne(id);
    if (result.error) {
      throw new Error(result.error);
    }
    return result.data;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: any) {
    const result = await this.servicesService.update(id, user);
    if (result.error) {
      throw new Error(result.error);
    }
    return result.data;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.servicesService.remove(id);
    if (result.error) {
      throw new Error(result.error);
    }
    return result.data;
  }
}
