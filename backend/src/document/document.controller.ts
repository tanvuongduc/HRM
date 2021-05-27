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


    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile() file: Express.Multer.File
    ) {
        return await this.documentService.uploadFile(file)
    }

}
