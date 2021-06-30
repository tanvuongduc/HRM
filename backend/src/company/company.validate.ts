import { RE_EMAIL } from './../validator/joi.validate';
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
export const ConfigValidate = new JoiValidationPipe(Joi.object({
    emailSupport: Joi.object({
        user: Joi.string().regex(RE_EMAIL).required(),
        pass: Joi.string().required()
    }),
    publicHoliday: Joi.array().items(Joi.date()),
    numberHolidays: Joi.number().required(),
    workingDay: Joi.object({
        from: Joi.number().required(),
        to: Joi.number().required()
    }),
    workingTime: Joi.object({
        am: {
            from: Joi.number().required(),
            to: Joi.number().required()
        },
        pm: {
            from: Joi.number().required(),
            to: Joi.number().required()
        },
    })
}));