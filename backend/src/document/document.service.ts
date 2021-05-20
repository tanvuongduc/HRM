import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Document } from './document.model'
import { writeFileSync } from 'fs';
import { BASEPATH } from '../base';


@Injectable()
export class DocumentService {
    constructor(
        @InjectModel('Document') private readonly documentModel: Model<Document>,
    ) { }

    async uploadFile(
        file: Express.Multer.File
    ) {


        // get model by id
        const extension = file.originalname.split('.')[file.originalname.split('.').length - 1];
        const fileName = file.originalname.replace(extension, '') + Date.now();
        let document = new this.documentModel({
            fileName: fileName,
            extension: extension
        })
        let folder = '';

        // save file into static folder 
        if (file.mimetype === 'image/jpeg') {
            folder = 'image';
        }
        else {
            folder = 'asset'
        }
        let path = `/${folder}/${fileName}.${extension}`;
        writeFileSync(BASEPATH + path, file.buffer);
        document.url = path;
        const res = await document.save();
        return {
            status: "success",
            id: res.id
        }
    }
}
