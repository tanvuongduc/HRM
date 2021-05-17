import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { UploadSchema } from './upload.model';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Upload', schema: UploadSchema}]),
],
  providers: [UploadService],
  controllers: [UploadController]
})
export class UploadModule { }
