import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Upload } from './upload.model'
import { writeFileSync } from 'fs';
import { BASEPATH } from '../base';
@Injectable()
export class UploadService {
    constructor(
        @InjectModel('Upload') private readonly uploadModel: Model<Upload>,
    ) { }

    async uploadAvatar(
        uid: String,
        avatar: String,
        type: String
    ) {
        const path = `/avatar/${uid}.${type}`;
        const data = new Buffer(avatar.split(',')[1], 'base64');
        writeFileSync(BASEPATH + path, data);
        return {
            avatar: path
        }
    }


}
