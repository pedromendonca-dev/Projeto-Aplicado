import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { SupabaseModule } from "./supabase/supabase.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    SupabaseModule,
  ],
})
export class AppModule {}
