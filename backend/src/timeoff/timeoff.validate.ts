import { JoiValidationPipe } from '../validator/joi.engine'
import * as Joi from '@hapi/joi';


export const timeoffStatusValidate = new JoiValidationPipe(
    Joi.string().regex(/^rejected{1}$|^approved{1}$|^pending{1}$/).required()
);