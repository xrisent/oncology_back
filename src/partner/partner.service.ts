import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partner } from './entities/partner.entity'; // Импортируем сущность Partner
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(Partner)
    private partnerRepository: Repository<Partner>, // Репозиторий для работы с сущностью Partner
  ) {}

  async create(createPartnerDto: CreatePartnerDto) {
    const newPartner = this.partnerRepository.create(createPartnerDto); // Создаем нового партнера
    return await this.partnerRepository.save(newPartner); // Сохраняем в базе данных
  }

  async findAll() {
    return await this.partnerRepository.find(); // Получаем всех партнеров
  }

  async findOne(id: number) {
    return await this.partnerRepository.findOne({
      where: { id }, // Используем параметр where для поиска по ID
    });
  }

  async update(id: number, updatePartnerDto: UpdatePartnerDto) {
    await this.partnerRepository.update(id, updatePartnerDto); // Обновляем партнера по ID
    return this.findOne(id); // Возвращаем обновленного партнера
  }

  async remove(id: number) {
    await this.partnerRepository.delete(id); // Удаляем партнера по ID
    return { deleted: true }; // Ответ, что удаление прошло успешно
  }
}
