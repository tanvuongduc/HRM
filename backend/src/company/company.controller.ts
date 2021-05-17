import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Contact, Documents } from './company.model';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyServive: CompanyService) { }
    @Post()
    async addCompany(
        @Body('name') name: string,
        @Body('documents') documents: Documents,
        @Body('contact') contact: Contact,
        @Body('pic') pic: string

    ) {
        const generatedId = await this.companyServive.insertCompany(
            name,
            documents,
            contact,
            pic
        )
        return { id: generatedId }
    }
    //  get document
    @Post('documents')
    async addDocument(
        @Body('id') id: string,
        @Body('title') title: string,
        @Body('description') description: string
    ) {
        const document = await this.companyServive.insertDocument(id, title, description)
        return document
    }
    @Get()
    async getAllCompany() {
        const companys = await this.companyServive.getCompany();
        return companys
    }


    // @Put(':id')
    // async update(
    //     @Param('id') id: string,
    //     @Body('name') name: string,
    //     @Body('domain') domain: string,
    //     @Body('overview') overview: string,
    //     @Body('address') address: string,
    //     @Body('contact') contact: string,
    //     @Body('pic') pic: string,
    //     @Body('notes') notes: string,
    // ) {
    //     await this.companyServive.updateCompany(
    //         id,
    //         name,
    //         domain,
    //         overview,
    //         address,
    //         contact,
    //         pic,
    //         notes)
    //     return { success: true }
    // }

}
