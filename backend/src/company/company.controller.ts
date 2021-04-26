import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyServive: CompanyService) { }
    @Post()
    async addCompany(
        @Body('name') name: string,
        @Body('domain') domain: string,
        @Body('overview') overview: string,
        @Body('address') address: string,
        @Body('contact') contact: string,
        @Body('pic') pic: string,
        @Body('notes') notes: string,
    ) {
        const generatedId = await this.companyServive.insertCompany(
            name,
            domain,
            overview,
            address,
            contact,
            pic,
            notes
        )
        return { id: generatedId }
    }

    @Get()
    async getAllCompany() {
        const companys = await this.companyServive.getCompany();
        return companys
    }

    @Get(':id')
    async getSingleCompany(
        @Param('id') id: string
    ) {
        return this.companyServive.getSingleCompany(id)
    }
    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('domain') domain: string,
        @Body('overview') overview: string,
        @Body('address') address: string,
        @Body('contact') contact: string,
        @Body('pic') pic: string,
        @Body('notes') notes: string,
    ) {
        await this.companyServive.updateCompany(
            id,
            name,
            domain,
            overview,
            address,
            contact,
            pic,
            notes)
        return { success: true }
    }
   
}
