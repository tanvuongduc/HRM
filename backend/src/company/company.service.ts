import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, Overview, Note } from './company.model';
import { UsersService } from '../user/user.service'

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel('Company') private readonly companyModel: Model<Company>,
        private readonly usersService: UsersService
    ) { }

    async getCompany() {
        const res = await this.companyModel.findOne().populate('pic').populate('documents').exec();
        if (!res) {
            const company = new this.companyModel({})
            await company.save();
            throw new NotFoundException('Đã tạo công ty, vui lòng cập nhật lại thông tin');
        }
        return {
            id: res.id,
            name: res.name,
            domain: res.domain,
            address: res.address,
            email: res.email,
            phone: res.phone,
            pic: res.pic,
            overviews: res.overviews,
            notes: res.notes,
            documents: res.documents
        }
    }

    async updateCompany(
        name: String,
        domain: String,
        address: String,
        email: String,
        phone: String,
        pic: String,
        overviews: [Overview],
        notes: [Note],
        documents: [String]
    ) {
        await this.usersService.findUserById(pic)
        let company = await this.findCompany();
        company.name = name;
        company.domain = domain;
        company.address = address;
        company.email = email;
        company.phone = phone;
        company.pic = pic;
        company.overviews = overviews;
        company.notes = notes;
        company.documents = documents
        const res = await company.save();
        return {
            id: res.id,
            name: res.name,
            domain: res.domain,
            address: res.address,
            email: res.email,
            phone: res.phone,
            pic: res.pic,
            overviews: res.overviews,
            notes: res.notes,
            documents: res.documents
        }

    }

    async findCompany(): Promise<Company> {
        let company: any;
        try {
            company = await this.companyModel.findOne().exec();
        } catch (error) {
            throw new NotFoundException('Could not find company.');
        }
        if (!company) {
            throw new NotFoundException(`find company err`);
        }
        return company;
    }
}
