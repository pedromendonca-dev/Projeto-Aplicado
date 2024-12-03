import { Module } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { ConfigModule } from '@nestjs/config';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  imports: [ConfigModule],
  controllers: [ServicesController],
  providers: [ServicesService, SupabaseService],
  exports: [ServicesService],
})
export class ServicesModule {}
