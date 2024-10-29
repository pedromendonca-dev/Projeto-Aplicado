import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CategorysModule } from './categorys/categorys.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, CategorysModule],
})
export class AppModule {}