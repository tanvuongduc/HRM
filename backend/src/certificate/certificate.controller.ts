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
        @Body('code') code: string,
        @Body('name') name: string,
        @Body('desc') desc: string,
    ) {
        const res = await this.certificateService.insertCertificate(code, name, desc);
        return res;
    }

    @Get(':id')
    async getCertificateById(
        @Param('id') id: string
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
        @Param('id') id: string,
        @Body('code') code: string,
        @Body('name') name: string,
        @Body('desc') desc: string,
    ) {
        const res = await this.certificateService.updateCertificate(id, code, name, desc);
        return res;
    }

}
