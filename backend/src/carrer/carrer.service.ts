
import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {Carrer} from './carrer.model'
@Injectable()
export class CarrerService {
    constructor(@InjectModel('Carrer') private readonly carrerModel: Model<Carrer>) { }
    
    //insert
    async insertCarrer(
        description: String,
        achievements: String,
        salary: Number,
        stage:Date
    ) {
        const newCarrer = new this.carrerModel({
            description,
            achievements,
            salary,
            stage
        })
        const result = await newCarrer.save()
        return result.id as String
    }

    //get all
    async getAllCarrer() {
        const carrer = await this.carrerModel.find()
        return carrer
    }

    //get a carrer by stage
    async getSingleCarrer(id:String) {
        const carrer = await this.carrerModel.findById(id).exec()
        return {
            id: carrer.id,
            description: carrer.description,
            achievements: carrer.achievements,
            salary: carrer.salary,
            stage:carrer.stage
        }
    }

    //update
    async updateCarrer(
        id:String,
        description: String,
        achievements: String,
        salary: Number,
        stage:Date
    ) {
        const data = await this.carrerModel.findById(id).exec()
        if (description) {
            data.description = description
        }
        if (achievements) {
            data.achievements = achievements
        }
        if (salary) {
            data.salary = salary
        }
        if (stage) {
            data.stage = stage
        }
        data.save()
            
    }

    //delete
    async deleteCarrer(id: String) {
        const carrer = await this.carrerModel.findOneAndDelete({ _id: id }).exec()
        if (carrer.n === 0) {
            throw new NotFoundException('Not found Carrer')
        }
    }
}
