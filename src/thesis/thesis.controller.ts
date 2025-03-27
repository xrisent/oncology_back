import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ThesisService } from './thesis.service';
import { CreateThesisDto } from './dto/create-thesis.dto';
import { UpdateThesisDto } from './dto/update-thesis.dto';
import { File } from 'multer';

@Controller('thesis')
export class ThesisController {
  constructor(private readonly thesisService: ThesisService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/theses',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(@UploadedFile() file: File, @Body() CreateThesisDto: CreateThesisDto){
    const newThesis = { ...CreateThesisDto, file: `/uploads/theses/${file.filename}` };
    return this.thesisService.create(newThesis);
  }

  @Get()
  findAll() {
    return this.thesisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thesisService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateThesisDto: UpdateThesisDto) {
    return this.thesisService.update(+id, updateThesisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thesisService.remove(+id);
  }
}