import { JoiValidationPipe } from './joi.engine';
import * as Joi from '@hapi/joi';


export const RE_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RE_PHONE_NUMBER = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;

export const isEmailRequired = new JoiValidationPipe(
    Joi.string().regex(RE_EMAIL).required()
);
export const isEmail = new JoiValidationPipe(
    Joi.string().regex(RE_EMAIL)
);
export const isPhoneNumberRequired = new JoiValidationPipe(
    Joi.string().regex(RE_PHONE_NUMBER).required()
);
export const isPhoneNumber = new JoiValidationPipe(
    Joi.string().regex(RE_PHONE_NUMBER)
);
export const isNumber = new JoiValidationPipe(
    Joi.number()
);
export const isNumberRequired = new JoiValidationPipe(
    Joi.number().required()
);
export const isString = new JoiValidationPipe(
    Joi.string()
);
export const isStringRequired = new JoiValidationPipe(
    Joi.string().required()
);
export const isDate = new JoiValidationPipe(
    Joi.date()
);
export const isDateRequired = new JoiValidationPipe(
    Joi.date().required()
);
export const isArrayString = new JoiValidationPipe(
    Joi.array().items(Joi.string())
);
export const isArrayStringRequired = new JoiValidationPipe(
    Joi.array().items(Joi.string().required())
);
