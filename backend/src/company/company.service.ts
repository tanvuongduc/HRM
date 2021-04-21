import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Company } from './company.model'

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel('Company') private readonly companyModel: Model<Company>,
    ) { }
    async insertCompany(
        name: string,
        domain: string,
        overview: string,
        address: string,
        contact: string,
        pic: string,
        notes: string,
    ) {
        const newCompany = new this.companyModel({
            name,
            domain,
            overview,
            address,
            contact,
            pic,
            notes,
        })
        const result = await newCompany.save();
        return result.id as string;
    }
    async getCompany() {
        const companys = await this.companyModel.find().exec();
        return companys.map(prod => ({
          id: prod.id,
          name: prod.name,
          domain: prod.domain,
          overview: prod.overview,
          address: prod.address,
          contact: prod.contact,
          pic: prod.pic,
          notes: prod.notes,
         
        }));
      }
}
