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

    async getDocuments(
        ids: string[]
    ){
        const docs = await this.documentModel.find().where('_id').in(ids).exec()
        return docs.map(doc=>({
            id: doc.id,
            fileName: doc.fileName,
            title: doc.title,
            desc: doc.desc,
            size: doc.size,
            extension: doc.extension,
            url: doc.url,
            createdAt: doc.createdAt,
        }))
    }

    async getDocumentById(
        id: string
    ) {
        const doc = await this.findDocumentById(id);
        return {
            id: doc.id,
            fileName: doc.fileName,
            title: doc.title,
            desc: doc.desc,
            size: doc.size,
            extension: doc.extension,
            url: doc.url,
            createdAt: doc.createdAt,
        }

    }

    async findDocumentById(
        id: string
    ): Promise<Document> {
        let doc;
        try {
            doc = await this.documentModel.findById(id).exec()
        }
        catch {
            throw new HttpException('has an error when find document, try again', 422);
        }
        if (!doc) {
            throw new HttpException(`Could not find documrnt${id}`, 400);
        }
        return doc;
    }
}
