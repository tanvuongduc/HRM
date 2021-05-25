import {
    Controller,
    Body,
    Get,
    Patch
} from '@nestjs/common';

import { CompanyService } from './company.service';
import { Overview, Note, SocialNetwork } from './company.model';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService,
    ) { }

    @Get()
    async getCompany() {
        const res = await this.companyService.getCompany();
        return res;
    }


    @Patch()
    async updateCompany(
        @Body('name') name: String,
        @Body('domain') domain: String,
        @Body('website') website: String,
        @Body('address') address: String,
        @Body('email') email: String,
        @Body('phone') phone: String,
        @Body('pic') pic: String,
        @Body('socialNetwork') socialNetwork: [SocialNetwork],
        @Body('overviews') overviews: [Overview],
        @Body('notes') notes: [Note],
        @Body('documents') documents: [String]
    ) {
        const res = await this.companyService.updateCompany(name, domain, website, address, email, phone, pic, socialNetwork, overviews, notes, documents);
        return res;
    }
}
