import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentSchema } from './department.model';
import { TeamModule } from '../team/team.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        forwardRef(() => UserModule),
        forwardRef(() => TeamModule),
        MongooseModule.forFeature([{ name: 'Department', schema: DepartmentSchema }]),
    ],
    providers: [DepartmentService],
    controllers: [DepartmentController],
    exports: [DepartmentService]
})
export class DepartmentModule { }
