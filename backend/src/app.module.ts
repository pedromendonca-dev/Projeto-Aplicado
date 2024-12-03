import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CategorysModule } from './categorys/categorys.module';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    CategorysModule,
    AuthModule,
    ReviewsModule,
    ServicesModule,
  ],
})
export class AppModule {}
