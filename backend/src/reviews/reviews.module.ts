import { Module, Controller } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ConfigModule } from '@nestjs/config';
import { SupabaseService } from 'src/supabase/supabase.service';
import { ReviewsController } from './reviews.controller';

@Module({
  imports: [ConfigModule],
  controllers: [ReviewsController],
  providers: [ReviewsService, SupabaseService],
})
export class ReviewsModule {}
