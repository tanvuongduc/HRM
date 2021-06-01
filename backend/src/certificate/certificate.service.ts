import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Certificate } from './certificate.model'

@Injectable()
export class CertificateService {
    constructor(
        @InjectModel('Certificate') private readonly certificateModel: Model<Certificate>,
    ) {

    }

    async insertCertificate(
        code: String,
        name: String,
        desc: String,
    ) {
        const checkCode = await this.certificateModel.find().where({ code: code }).exec();
        if (checkCode.length > 0) {
            throw new HttpException('code exsited!', 409)
        }
        const newCertificate = new this.certificateModel({
            code, name, desc
        });
        const res = await newCertificate.save();
        return {
            id: res.id
        }
    }

    async getCertificateById(
        id: String
    ) {
        const cer = await this.findCertificateById(id);
        return {
            id: cer.id,
            code: cer.code,
            name: cer.name,
            desc: cer.desc
        }
    }

    async getAllCertificates() {
        const cerArr = await this.certificateModel.find().exec();
        return cerArr.map(cer => ({
            id: cer.id,
            code: cer.code,
            name: cer.name,
            desc: cer.desc
        }));
    }

    async updateCertificate(
        id: String,
        code: String,
        name: String,
        desc: String,
    ) {
        let cer = await this.findCertificateById(id);
        if (code != cer.code) {
            const checkCode = await this.certificateModel.find().where({ code: code }).exec();
            if (checkCode.length) {
                throw new HttpException('code exsited!', 409)
            }
        }
        cer.code = code;
        cer.name = name;
        cer.desc = desc;
        const res = await cer.save();
        return {
            id: res.id
        }
    }


    async findCertificateById(id: String): Promise<Certificate> {
        let Certificate: any;
        try {
            Certificate = await this.certificateModel.findById(id).exec();
        } catch (error) {
            throw new HttpException('Could not find Certificate.', 400);
        }
        if (!Certificate) {
            throw new HttpException(`find Certificate err ${id}`, 400);
        }
        return Certificate;
    }

}
