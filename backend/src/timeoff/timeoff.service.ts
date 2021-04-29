import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timeoff } from './timeoff.model'
@Injectable()
export class TimeoffService {
    constructor(
        @InjectModel('Timeoff') private readonly timeoffModel: Model<Timeoff>
    ){}
    
}
