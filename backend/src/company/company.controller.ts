import { SocialNetworksValidate, OverviewsValidate, NotesValidate } from './company.validate';
import { isStringRequired, isEmailRequired, isPhoneNumberRequired, isArrayString } from './../validator/joi.validate';
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
        @Body('name', isStringRequired) name: String,
        @Body('domain', isStringRequired) domain: String,
        @Body('website', isStringRequired) website: String,
        @Body('address', isStringRequired) address: String,
        @Body('email', isEmailRequired) email: String,
        @Body('phone', isPhoneNumberRequired) phone: String,
        @Body('pic', isStringRequired) pic: String,
        @Body('socialNetwork', SocialNetworksValidate) socialNetwork: SocialNetwork[],
        @Body('overviews', OverviewsValidate) overviews: Overview[],
        @Body('notes', NotesValidate) notes: Note[],
        @Body('documents', isArrayString) documents: String[]
    ) {
        const res = await this.companyService.updateCompany(name, domain, website, address, email, phone, pic, socialNetwork, overviews, notes, documents);
        return res;
    }
}
