import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { SupabaseService } from '../supabase/supabase.service';
import { ConfigModule } from '@nestjs/config';
import { CategorysController } from './categorys.controller';

@Module({
  imports: [ConfigModule],
  controllers: [CategorysController],
  providers: [CategorysService, SupabaseService],
})
export class CategorysModule {}