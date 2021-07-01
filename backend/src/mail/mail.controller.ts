import { isStringRequired } from './../validator/joi.validate';
import { MailService } from './mail.service';
import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller('mail')
export class MailController {
    constructor(
        private readonly mailService: MailService
    ) { }

    @Post()
    async sendEmailForAllUsers(
        @Body('msg', isStringRequired) msg: string
    ) {
        const res = await this.mailService.sendEmailForAllUsers(msg);
        return res;
    }

    @Post(':id')
    async sendEmailForUserId(
        @Param('id', isStringRequired) id: string,
        @Body('msg', isStringRequired) msg: string
    ){
        const res = await this.mailService.sendEmailForUserId(id, msg);
        return res;
    }

}
