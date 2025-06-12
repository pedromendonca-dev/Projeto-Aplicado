import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { FirebaseAdminModule } from 'src/firebase/firebase-admin.module';

@Module({
  imports: [ConfigModule, FirebaseAdminModule],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
