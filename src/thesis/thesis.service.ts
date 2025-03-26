import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thesis } from './entities/thesis.entity'; // Импортируем сущность Thesis
import { CreateThesisDto } from './dto/create-thesis.dto';
import { UpdateThesisDto } from './dto/update-thesis.dto';

@Injectable()
export class ThesisService {
  constructor(
    @InjectRepository(Thesis)
    private thesisRepository: Repository<Thesis>, // Репозиторий для работы с сущностью Thesis
  ) {}

  async create(createThesisDto: CreateThesisDto) {
    const newThesis = this.thesisRepository.create(createThesisDto); // Создаем новую тезис
    return await this.thesisRepository.save(newThesis); // Сохраняем в базе данных
  }

  async findAll() {
    return await this.thesisRepository.find(); // Получаем все тезисы
  }

  async findOne(id: number) {
    return await this.thesisRepository.findOne({
      where: { id }, // Используем параметр where для поиска по ID
    });
  }

  async update(id: number, updateThesisDto: UpdateThesisDto) {
    await this.thesisRepository.update(id, updateThesisDto); // Обновляем тезис по ID
    return this.findOne(id); // Возвращаем обновленный тезис
  }

  async remove(id: number) {
    await this.thesisRepository.delete(id); // Удаляем тезис по ID
    return { deleted: true }; // Ответ, что удаление прошло успешно
  }
}
