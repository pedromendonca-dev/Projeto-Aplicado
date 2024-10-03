import { Injectable, Inject, Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(@Inject('SUPABASE_CLIENT') private readonly supabaseClient) {
    if (!this.supabaseClient) {
      this.logger.error('Supabase client is not injected');
    } else {
      this.logger.log('Supabase client injected successfully');
    }
  }

  async getUsers() {
    this.logger.log('Fetching users');
    const { data, error } = await this.supabaseClient.from('users').select('*');

    if (error) {
      this.logger.error('Error fetching users', error);
      throw new Error(error.message);
    }

    return data;
  }

  async createUser(userDto: any) {
    this.logger.log('Creating user', userDto);
    const { data, error } = await this.supabaseClient
      .from('users')
      .insert([userDto]);

    if (error) {
      this.logger.error('Error creating user', error);
      throw new Error(error.message);
    }

    return data;
  }

  async updateUser(userId: string, userDto: any) {
    this.logger.log(`Updating user with ID ${userId}`, userDto);
    const { data, error } = await this.supabaseClient
      .from('users')
      .update(userDto)
      .eq('id', userId);

    if (error) {
      this.logger.error(`Error updating user with ID ${userId}`, error);
      throw new Error(error.message);
    }

    return data;
  }

  async deleteUser(userId: string) {
    this.logger.log(`Deleting user with ID ${userId}`);
    const { error } = await this.supabaseClient
      .from('users')
      .delete()
      .eq('id', userId);

    if (error) {
      this.logger.error(`Error deleting user with ID ${userId}`, error);
      throw new Error(error.message);
    }

    return { message: `User with ID ${userId} deleted successfully` };
  }
}
