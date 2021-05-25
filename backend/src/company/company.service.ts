import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Company, Contact, Documents } from './company.model'

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel('Company') private readonly companyModel: Model<Company>,
    ) { }
    //post insert
    async insertCompany(
        name: string,
        documents: Documents,
        contact: Contact,
        pic: string,
    ) {
        const newCompany = new this.companyModel({
            name,
            documents,
            contact,
            pic,

        })
        const result = await newCompany.save();
        return result.id as string;
    }
    // get all
    async getCompany() {
        const companys = await this.companyModel.find().exec();
        return companys.map(prod => ({
            id: prod.id,
            name: prod.name,
            documents: prod.documents,
            contact: prod.contact,
            pic: prod.pic
        }));
    }
    //update Company
    // async updateCompany(
    //     id: string,
    //     name: string,
    //     domain: string,
    //     overview: string,
    //     address: string,
    //     contact: string,
    //     pic: string,
    //     notes: string,
    // ) {
    //     const updateCompany = await this.findCompany(id);
    //     if (name) {
    //         updateCompany.name = name;
    //     }
    //     if (domain) {
    //         updateCompany.domain = domain;
    //     }
    //     if (overview) {
    //         updateCompany.overview = overview;
    //     }
    //     if (address) {
    //         updateCompany.address = address;
    //     }
    //     if (contact) {
    //         updateCompany.contact = contact;
    //     }
    //     if (pic) {
    //         updateCompany.pic = pic;
    //     }
    //     if (notes) {
    //         updateCompany.notes = notes;
    //     }
    //     updateCompany.save();
    // }


    // private async findCompany(id: string): Promise<Company> {
    //     let company;
    //     try {
    //         company = await this.companyModel.findById(id).exec();
    //     } catch (error) {
    //         throw new NotFoundException('Could not find Company.');
    //     }
    //     if (!company) {
    //         throw new NotFoundException('Could not find Company.');
    //     }
    //     return company;
    // }
}
