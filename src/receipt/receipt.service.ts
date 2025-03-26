import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receipt } from './entities/receipt.entity'; // Импортируем сущность Receipt
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private receiptRepository: Repository<Receipt>, // Репозиторий для работы с сущностью Receipt
  ) {}

  async create(createReceiptDto: CreateReceiptDto) {
    const newReceipt = this.receiptRepository.create(createReceiptDto); // Создаем новый чек
    return await this.receiptRepository.save(newReceipt); // Сохраняем в базе данных
  }

  async findAll() {
    return await this.receiptRepository.find(); // Получаем все чеки
  }

  async findOne(id: number) {
    return await this.receiptRepository.findOne({
      where: { id }, // Используем параметр where для поиска по ID
    });
  }

  async update(id: number, updateReceiptDto: UpdateReceiptDto) {
    await this.receiptRepository.update(id, updateReceiptDto); // Обновляем чек по ID
    return this.findOne(id); // Возвращаем обновленный чек
  }

  async remove(id: number) {
    await this.receiptRepository.delete(id); // Удаляем чек по ID
    return { deleted: true }; // Ответ, что удаление прошло успешно
  }
}
