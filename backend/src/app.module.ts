import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CategorysModule } from './categorys/categorys.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    CategorysModule,
    AuthModule,
    ServicesModule,
  ],
})
export class AppModule {}
