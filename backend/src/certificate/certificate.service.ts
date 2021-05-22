import { Injectable, NotFoundException } from '@nestjs/common';
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
        name: String,
        desc: String,
    ) {
        const size = await this.certificateModel.estimatedDocumentCount().exec();
        const id = size+1;
        const newCertificate = new this.certificateModel({
            id, name, desc
        });
        const res = await newCertificate.save();
        return {
            id: res.id
        }
    }

    async getCertificateById(
        id: Number
    ){
        const cer = await this.findCertificateById(id);
        return {
            id: cer.id,
            name: cer.name,
            desc: cer.desc
        }
    }

    async getAllCertificates(){
        const cerArr = await this.certificateModel.find().exec();
        return cerArr.map(cer=>({
            id: cer.id,
            name: cer.name,
            desc: cer.desc
        })) ;
    }

    async updateCertificate(
        id: Number,
        name: String,
        desc: String,
    ){
        let cer = await this.findCertificateById(id);
        cer.name = name;
        cer.desc =desc;
        const res = await cer.save();
        return{
            id: res.id
        }
    }


    async findCertificateById(id: Number): Promise<Certificate> {
        let Certificate: any;
        try {
            Certificate = await this.certificateModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find Certificate.');
        }
        if (!Certificate) {
            throw new NotFoundException(`find Certificate err ${id}`);
        }
        return Certificate;
    }

}
