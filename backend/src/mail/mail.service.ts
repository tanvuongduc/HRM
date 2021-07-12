import { UsersService } from './../user/user.service';
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(
        private readonly mailerService: MailerService,
        @Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService
    ) { }

    async sendEmailForAllUsers(
        msg: string
    ) {
        let sentUsers = []
        const users = await this.usersService.findMailOfAllUsers();
        for (const user of users) {
            try {
                await this.mailerService.sendMail({
                    to: user.email,
                    from: '"Support HRM" <support@hrm.com>',
                    subject: 'Welcome to Nice App! Confirm your Email',
                    template: 'confirmation',
                    context: {
                        name: user.name,
                        msg: msg
                    },
                });
                sentUsers.push(user);
            }
            catch {

            }
        }
        return sentUsers;
    }
    async sendEmailForUserId(
        id: string,
        msg: string
    ) {
        const user = await this.usersService.findUserById(id);
        let res = await this.mailerService.sendMail({
            to: user.email,
            from: '"Support HRM" <support@hrm.com>',
            subject: 'HRM Notice',
            template: './confirmation',
            context: {
                name: user.name,
                msg: msg
            },
        });
        return {
            res: res,
            name: user.name,
            email: user.email
        };

    }
}
