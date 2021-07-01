import { SocialNetworksValidate, OverviewsValidate, NotesValidate } from './company.validate';
import { isStringRequired, isEmailRequired, isPhoneNumberRequired, isArrayString, isEmail, isPhoneNumber, isString } from './../validator/joi.validate';
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
        @Body('name', isString) name: string,
        @Body('domain', isString) domain: string,
        @Body('website', isString) website: string,
        @Body('address', isString) address: string,
        @Body('email', isEmail) email: string,
        @Body('phone', isPhoneNumber) phone: string,
        @Body('pic', isString) pic: string,
        @Body('socialNetwork', SocialNetworksValidate) socialNetwork: SocialNetwork[],
        @Body('overviews', OverviewsValidate) overviews: Overview[],
        @Body('notes', NotesValidate) notes: Note[],
        @Body('documents', isArrayString) documents: string[]
    ) {
        const res = await this.companyService.updateCompany(name, domain, website, address, email, phone, pic, socialNetwork, overviews, notes, documents);
        return res;
    }
}
