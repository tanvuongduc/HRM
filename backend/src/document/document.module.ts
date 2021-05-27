import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DocumentSchema } from './document.model';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Document', schema: DocumentSchema}]),
],
  providers: [DocumentService],
  controllers: [DocumentController]
})
export class DocumentModule { }
