import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FirebaseAdminModule } from '../firebase/firebase-admin.module';

@Module({
  imports: [FirebaseAdminModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
