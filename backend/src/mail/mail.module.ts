import { Module, forwardRef } from '@nestjs/common';
import { MailService } from './mail.service';
import { UserModule } from '../user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { MailController } from './mail.controller';
@Module({
	imports: [
		forwardRef(() => UserModule),
		MailerModule.forRoot({
			transport: {
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				service: 'gmail',
				auth: {
					user: 'anhtrieuhotboy00hoi@gmail.com',
					pass: 'kikaka97'
				},
			},
			defaults: {
				from: '"No Reply" <hrm@suport.com>',
			},
			template: {
				dir: join(__dirname, 'templates'),
				adapter: new HandlebarsAdapter(),
				options: {
					strict: true,
				},
			},
		}),
	],
	providers: [MailService],
	exports: [MailService],
	controllers: [MailController],
})
export class MailModule { }
