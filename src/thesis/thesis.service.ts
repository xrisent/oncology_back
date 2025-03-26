import { Injectable } from '@nestjs/common';
import { CreateThesisDto } from './dto/create-thesis.dto';
import { UpdateThesisDto } from './dto/update-thesis.dto';

@Injectable()
export class ThesisService {
  create(createThesisDto: CreateThesisDto) {
    return 'This action adds a new thesis';
  }

  findAll() {
    return `This action returns all thesis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thesis`;
  }

  update(id: number, updateThesisDto: UpdateThesisDto) {
    return `This action updates a #${id} thesis`;
  }

  remove(id: number) {
    return `This action removes a #${id} thesis`;
  }
}
