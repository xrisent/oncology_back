import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
  ) {}

  async create(createPartnerDto: CreatePartnerDto) {
    const partner = this.partnerRepository.create(createPartnerDto);
    return await this.partnerRepository.save(partner);
  }

  async findAll() {
    return await this.partnerRepository.find();
  }

  async findOne(id: number) {
    return await this.partnerRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePartnerDto: UpdatePartnerDto) {
    await this.partnerRepository.update(id, updatePartnerDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.partnerRepository.delete(id);
  }
}
