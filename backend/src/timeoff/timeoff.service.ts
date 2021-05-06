import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timeoff } from './timeoff.model'
@Injectable()
export class TimeoffService {
    constructor(
        @InjectModel('Timeoff') private readonly timeoffModel: Model<Timeoff>
    ) { }
    async insertTimeoff(
        reason: String,
        from: Date,
        to: Date,
        by: String,
        status: String,
    ) {
        let timeoff = new this.timeoffModel({
            reason,
            from,
            to,
            by,
            status,
        })
        await timeoff.save()
        return timeoff.id
    }

    async getAllTimeoffInMonth(
    ){
        let date = Date.now()
        const timeoffs = await this.timeoffModel.find().where(`from>${date}`).exec();
        return timeoffs.map(time => ({
            id: time.id,
            reason: time.reason,
            from: time.from,
            to: time.to,
            by: time.by,
            status: time.status,
            censor: time.censor,
        }));
    }
    async handleTimeoff(
        id: String,
        status: String
    ) {
        const timeoff = await this.findTimeoff(id);
        //timeoff.censor = 
        timeoff.status = (status === "Approved" || status === "Rejected") ? status : "Pendding";
        timeoff.save();
        return {
            id: id
        }
    }

    private async findTimeoff(id: String): Promise<Timeoff> {
        let Timeoff: any;
        try {
            Timeoff = await this.timeoffModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find Timeoff.');
        }
        if (!Timeoff) {
            throw new NotFoundException('Could not find Timeoff.');
        }
        return Timeoff;
    }
}
