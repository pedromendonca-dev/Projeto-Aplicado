import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class ServicesService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(service: any) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('services')
      .insert([service])
      .select();

    return { data, error };
  }

  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('services')
      .select('*');
    return { data, error };
  }

  async findOne(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('services')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  }

  async update(id: number, service: any) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('services')
      .update(service)
      .eq('id', id);
    return { data, error };
  }

  async remove(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('services')
      .delete()
      .eq('id', id);

    if (error) {
      return { error };
    }

    return { data };
  }
}
