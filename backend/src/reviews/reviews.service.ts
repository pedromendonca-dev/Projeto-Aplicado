import { SupabaseService } from './../supabase/supabase.service';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './reviews.dto';
import { Review } from './reviews.entity';

@Injectable()
export class ReviewsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(reviewData: CreateReviewDto): Promise<Review> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('reviews')
      .insert({
        id: crypto.randomUUID(),
        ...reviewData,
        created_at: new Date(),
      })
      .select();

    if (error) throw error;
    return data;
  }

  async getReviewsByProviderId(providerId: string): Promise<Review[]> {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('reviews')
      .select('*')
      .eq('provider_id', providerId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  async remove(id: string) {
    const { error } = await this.supabaseService
      .getClient()
      .from('reviews')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
}
