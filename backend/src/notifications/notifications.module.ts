import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServicesService } from './notifications.service';
import { ServicesController } from './notifications.controller';
import { FirebaseAdminService } from 'src/firebase/firebase-admin.service';

@Module({
  imports: [ConfigModule],
  controllers: [ServicesController],
  providers: [ServicesService, FirebaseAdminService],
})
export class ServicesModule {}
