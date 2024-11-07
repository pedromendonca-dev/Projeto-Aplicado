import { Module } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { ConfigModule } from '@nestjs/config';
import { ServicesService } from './notifications.service';
import { ServicesController } from './notifications.controller';

@Module({
  imports: [ConfigModule],
  controllers: [ServicesController],
  providers: [ServicesService, SupabaseService],
})
export class ServicesModule {}
