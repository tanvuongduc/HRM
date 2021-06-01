import {
    Controller,
    UseInterceptors,
    UploadedFile,
    Post,
    Body
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { DocumentService } from './document.service'

@Controller('upload')
export class DocumentController {

    constructor(private readonly documentService: DocumentService) { }


    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('title') title: String,
        @Body('desc') desc: String
    ) {
        return await this.documentService.uploadFile(file, title, desc)
    }

}
