import {
    Controller,
    Patch,
    Post,
    Body,
    Get,
    Query,
    Param
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

    @Get(':id')
    async getCertificateById(
        @Param('id') id: String
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

    @Patch(':id')
    async updateCertificate(
        @Param('id') id: String,
        @Body('code') code: String,
        @Body('name') name: String,
        @Body('desc') desc: String,
    ) {
        const res = await this.certificateService.updateCertificate(id, code, name, desc);
        return res;
    }

}
