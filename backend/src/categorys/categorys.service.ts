import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class CategorysService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(user: any) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('categories')
      .insert([user])
      .select();

    return { data, error };
  }

  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('categories')
      .select('*');
    return { data, error };
  }

  async findOne(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('categories')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }

  async update(id: number, user: any) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('categories')
      .update(user)
      .eq('id', id);
    return { data, error };
  }

  async remove(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) {
      return { error };
    }

    return { data };
  }
}
