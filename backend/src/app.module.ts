import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [ConfigModule.forRoot(), FirebaseModule, UsersModule],
})
export class AppModule {}
