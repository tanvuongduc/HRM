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
        id: String,
        type: String,
        file: Express.Multer.File
    ) {
        // get model by id


        // save file into static folder 
        switch (file.mimetype) {
            case 'image/jpeg':
                const path = `/image/${file.originalname}`
                writeFileSync(BASEPATH + path, file.buffer);
                return {
                    msg: true,
                    id: id,
                    type: type
                }
        }
    }
}
