import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { CertificateSchema } from './certificate.model';


@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Certificate', schema: CertificateSchema}])
  ],
  providers: [CertificateService],
  controllers: [CertificateController]
})
export class CertificateModule {}
