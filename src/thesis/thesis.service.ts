import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thesis } from './entities/thesis.entity';
import { CreateThesisDto } from './dto/create-thesis.dto';
import { UpdateThesisDto } from './dto/update-thesis.dto';

@Injectable()
export class ThesisService {
  constructor(
    @InjectRepository(Thesis)
    private readonly thesisRepository: Repository<Thesis>,
  ) {}

  async create(createThesisDto: CreateThesisDto) {
    const thesis = this.thesisRepository.create(createThesisDto);
    return await this.thesisRepository.save(thesis);
  }

  async findAll() {
    return await this.thesisRepository.find();
  }

  async findOne(id: number) {
    return await this.thesisRepository.findOne({ where: { id } });
  }

  async update(id: number, updateThesisDto: UpdateThesisDto) {
    await this.thesisRepository.update(id, updateThesisDto);
    return this.findOne(id);
  }
  

  async remove(id: number) {
    await this.thesisRepository.delete(id);
  }
}
