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
        @Body('name', isStringRequired) name: string,
        @Body('domain', isStringRequired) domain: string,
        @Body('website', isStringRequired) website: string,
        @Body('address', isStringRequired) address: string,
        @Body('email', isEmailRequired) email: string,
        @Body('phone', isPhoneNumberRequired) phone: string,
        @Body('pic', isStringRequired) pic: string,
        @Body('socialNetwork', SocialNetworksValidate) socialNetwork: SocialNetwork[],
        @Body('overviews', OverviewsValidate) overviews: Overview[],
        @Body('notes', NotesValidate) notes: Note[],
        @Body('documents', isArrayString) documents: string[]
    ) {
        const res = await this.companyService.updateCompany(name, domain, website, address, email, phone, pic, socialNetwork, overviews, notes, documents);
        return res;
    }
}
