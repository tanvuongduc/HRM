import {
    Controller,
    Patch,
    Post,
    Body,
    Get,
    Query
} from '@nestjs/common';
import { CertificateService } from './certificate.service'

@Controller('certificates')
export class CertificateController {

    constructor(private readonly certificateService: CertificateService) { }

    @Post()
    async insertCertificate(
        @Body('code') code: String,
        @Body('name') name: String,
        @Body('desc') desc: String,
    ) {
        const res = await this.certificateService.insertCertificate(code, name, desc);
        return res;
    }

    @Get('find')
    async getCertificateById(
        @Query('id') id: String
    ) {
        const res = await this.certificateService.getCertificateById(id);
        return res;
    }

    @Get()
    async getAllCertificates(
    ) {
        const res = await this.certificateService.getAllCertificates();
        return res;
    }

    @Patch('update')
    async updateCertificate(
        @Query('id') id: String,
        @Body('name') name: String,
        @Body('desc') desc: String,
    ) {
        const res = await this.certificateService.updateCertificate(id, name, desc);
        return res;
    }

}
