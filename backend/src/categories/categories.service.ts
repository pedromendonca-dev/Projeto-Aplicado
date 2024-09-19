import { Injectable, Inject, Logger } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(@Inject('SUPABASE_CLIENT') private readonly supabaseClient) {
    if (!this.supabaseClient) {
      this.logger.error('Supabase client is not injected');
    } else {
      this.logger.log('Supabase client injected successfully');
    }
  }

  async getCategories() {
    this.logger.log('Fetching categories');
    const { data, error } = await this.supabaseClient.from('categories').select('*');

    if (error) {
      this.logger.error('Error fetching categories', error);
      throw new Error(error.message);
    }

    return data;
  }

  async createCategory(categoryDto: any) {
    this.logger.log('Creating category', categoryDto);
    const { data, error } = await this.supabaseClient
      .from('categories')
      .insert([categoryDto]);

    if (error) {
      this.logger.error('Error creating category', error);
      throw new Error(error.message);
    }

    return data;
  }

  async updateCategory(categoryId: string, categoryDto: any) {
    this.logger.log(`Updating category with ID ${categoryId}`, categoryDto);
    const { data, error } = await this.supabaseClient
      .from('categories')
      .update(categoryDto)
      .eq('id', categoryId);

    if (error) {
      this.logger.error(`Error updating category with ID ${categoryId}`, error);
      throw new Error(error.message);
    }

    return data;
  }

  async deleteCategory(categoryId: string) {
    this.logger.log(`Deleting category with ID ${categoryId}`);
    const { error } = await this.supabaseClient
      .from('categories')
      .delete()
      .eq('id', categoryId);

    if (error) {
      this.logger.error(`Error deleting category with ID ${categoryId}`, error);
      throw new Error(error.message);
    }

    return { message: `Category with ID ${categoryId} deleted successfully` };
  }
}
