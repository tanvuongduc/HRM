import { Injectable , NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timeoff } from './timeoff.model'
@Injectable()
export class TimeoffService {
    constructor(
        @InjectModel('Timeoff') private readonly timeoffModel: Model<Timeoff>
    ){}
    async insertTimeoff(){}
    async handleTimeoff(
        id: String,
        status: String
    ){
        const timeoff = await this.findTimeoff(id);
        //timeoff.censor = 
        timeoff.status = (status==="Approved"||status==="Rejected")?status:"Pendding";
        timeoff.save();
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
