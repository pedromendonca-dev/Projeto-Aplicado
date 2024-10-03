import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class UsersService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(user: any) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .insert([user])
      .select();

    return { data, error };
  }

  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .select('*');
    return { data, error };
  }

  async findOne(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }

  async update(id: number, user: any) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .update(user)
      .eq('id', id);
    return { data, error };
  }

  async remove(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('users')
      .delete()
      .eq('id', id);

    if (error) {
      return { error };
    }

    return { data };
  }
}
