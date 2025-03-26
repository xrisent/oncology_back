import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>, // Репозиторий для работы с сущностью Member
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const newMember = this.memberRepository.create(createMemberDto); // Создание нового объекта
    return await this.memberRepository.save(newMember); // Сохранение в базе данных
  }

  async findAll() {
    return await this.memberRepository.find(); // Получение всех членов
  }

  async findOne(id: number) {
    return await this.memberRepository.findOne({
      where: { id }, // Обновленный способ передачи ID в findOne
    });
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    await this.memberRepository.update(id, updateMemberDto); // Обновление члена по ID
    return this.findOne(id); // Возвращаем обновленного члена
  }

  async remove(id: number) {
    await this.memberRepository.delete(id); // Удаление члена по ID
    return { deleted: true }; // Ответ, что удаление прошло успешно
  }
}
