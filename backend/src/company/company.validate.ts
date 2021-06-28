import { JoiValidationPipe } from '../validator/joi.engine'
import * as Joi from '@hapi/joi';


export const SocialNetworksValidate = new JoiValidationPipe(Joi.array().items(
    Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required()
    })
));
export const OverviewsValidate = new JoiValidationPipe(Joi.array().items(
    Joi.object({
        img: Joi.string().required(),
        title: Joi.string().required(),
        desc: Joi.string().required()
    })
));
export const NotesValidate = new JoiValidationPipe(Joi.array().items(
    Joi.object({
        title: Joi.string().required(),
        desc: Joi.string().required()
    })
));