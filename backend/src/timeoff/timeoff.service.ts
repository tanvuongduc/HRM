import { UsersService } from './../user/user.service';
import { Injectable, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timeoff, TimeoffStatus } from './timeoff.model'
@Injectable()
export class TimeoffService {
    constructor(
        @InjectModel('Timeoff') private readonly timeoffModel: Model<Timeoff>,
        @Inject(forwardRef(()=>UsersService)) private readonly usersService: UsersService
    ) { }
    async insertTimeoff(
        reason: string,
        from: Date,
        to: Date,
        by: string,
        pic: string
    ) {
        await this.usersService.findUserById(pic);
        let timeoff = new this.timeoffModel({
            reason,
            from,
            to,
            by,
            pic
        })
        await timeoff.save();
        return timeoff;
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
            pic: time.pic,
        }));
    }
    async handleTimeoff(
        id: string,
        status: TimeoffStatus
    ) {
        const timeoff = await this.findTimeoff(id);
        timeoff.status = status;
        timeoff.save();
        return timeoff;
    }

    private async findTimeoff(id: string): Promise<Timeoff> {
        let Timeoff: any;
        try {
            Timeoff = await this.timeoffModel.findById(id).populate('pic').populate('by').exec();
        } catch (error) {
            throw new NotFoundException('Could not find Timeoff.');
        }
        if (!Timeoff) {
            throw new NotFoundException('Could not find Timeoff.');
        }
        return Timeoff;
    }
}
