import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { FirebaseAdminModule } from 'src/firebase/firebase-admin.module';
import { CategorysController } from './categorys.controller';

@Module({
  imports: [FirebaseAdminModule],
  providers: [CategorysService],
  controllers: [CategorysController],
  exports: [CategorysService],
})
export class CategorysModule {}
