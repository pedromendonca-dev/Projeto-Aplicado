import { Module, Logger } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useFactory: (configService: ConfigService) => {
        const supabaseUrl = configService.get<string>('SUPABASE_URL');
        const supabaseKey = configService.get<string>('SUPABASE_KEY');

        if (!supabaseUrl || !supabaseKey) {
          Logger.error('Supabase URL or Key is not defined');
          throw new Error('Supabase URL or Key is not defined');
        } else {
          Logger.log('Supabase URL and Key loaded successfully');
        }

        return createClient(supabaseUrl, supabaseKey);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}
