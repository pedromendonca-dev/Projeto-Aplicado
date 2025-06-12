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
import { Response } from 'express';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) { }

  @Post()
  async create(@Body() service: any) {
    const result = await this.servicesService.create(service);
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
  async findOne(@Param('id') id: any) {
    const result = await this.servicesService.findOne(id);
    if (result.error) {
      throw new Error(result.error || 'Service not found');
    }
    return result.data;
  }

  @Put(':id')
  async update(@Param('id') id: any, @Body() service: any) {
    const result = await this.servicesService.update(id, service);
    if (result.error) {
      throw new Error(result.error || 'Error updating service');
    }
    return result.data;
  }

  @Delete(':id')
  async remove(@Param('id') id: any) {
    const result = await this.servicesService.remove(id);
    if (result.error) {
      throw new Error(result.error || 'Error deleting service');
    }
    return result.data;
  }
}
