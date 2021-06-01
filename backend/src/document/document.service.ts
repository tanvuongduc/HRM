import {
    Injectable,
    HttpException,
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
        file: Express.Multer.File,
        title: String,
        desc: String
    ) {


        // get model by id
        const extension = file.originalname.split('.')[file.originalname.split('.').length - 1];
        const fileName = file.originalname.replace(extension, '') + Date.now();
        let document = new this.documentModel({
            fileName: fileName,
            title: title,
            desc: desc,
            extension: extension,
            size: file.buffer.length
        })
        let folder = '';

        // save file into static folder 
        if (file.mimetype.startsWith('image')) {
            folder = 'image';
        }
        else {
            folder = 'asset'
        }
        let path = `/${folder}/${fileName}.${extension}`;
        try {
            writeFileSync(BASEPATH + path, file.buffer);
        } catch {
            throw new HttpException('File load err', 500);
        }
        
        document.url = path;
        const res = await document.save();
        return {
            id: res.id,
            fileName: res.fileName,
            title: res.title,
            desc: res.desc,
            size: res.size,
            extension: res.extension,
            url: res.url,
            createdAt: res.createdAt,
        }
    }
}
