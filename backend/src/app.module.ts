import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CategorysModule } from './categorys/categorys.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    UsersModule,
    CategorysModule,
    ServicesModule,
  ],
})
export class AppModule {}
