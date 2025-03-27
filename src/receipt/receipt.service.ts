import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receipt } from './entities/receipt.entity';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private readonly receiptRepository: Repository<Receipt>,
  ) {}

  async create(filePath: string, createReceiptDto: CreateReceiptDto) {
    const receipt = this.receiptRepository.create({ ...createReceiptDto, file: filePath });
    return await this.receiptRepository.save(receipt);
  }

  async findAll() {
    return await this.receiptRepository.find();
  }

  async findOne(id: number) {
    return await this.receiptRepository.findOne({ where: { id } });
  }

  async update(id: number, updateReceiptDto: UpdateReceiptDto) {
    await this.receiptRepository.update(id, updateReceiptDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.receiptRepository.delete(id);
  }
}