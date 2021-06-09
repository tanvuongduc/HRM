import { HttpException } from '@nestjs/common';
import { JoiValidationPipe } from '../validator/joi.engine'
import * as Joi from '@hapi/joi';


export const CertificatesValidate = new JoiValidationPipe(Joi.array().items(
    Joi.object({
        id: Joi.string().required(),
        recivedAt: Joi.date().required(),
        note: Joi.string().required()
    })
));
export const SocialNetworksValidate = new JoiValidationPipe(Joi.array().items(
    Joi.object({
        title: Joi.string().required(),
        url: Joi.string().required()
    })
));
export const BankValidate = new JoiValidationPipe(Joi.object({
    bankName: Joi.string().required(),
    ownName: Joi.string().required(),
    bankNumber: Joi.string().required()
}));
export const UserStatusValidate = new JoiValidationPipe(
    Joi.string().regex(/^working$|^retired$|^pending$/).required()
);

export const EmailValidate = (email:string, domain:string) => {
    const re = new RegExp(`/${domain}$/`);
    if(!re.test(email)){
        throw new HttpException(`email must be have domain is ${domain}`, 400);
    }
}