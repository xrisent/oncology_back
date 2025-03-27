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
    private readonly memberRepository: Repository<Member>,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const member = this.memberRepository.create(createMemberDto); // Создание нового члена
    return await this.memberRepository.save(member); // Сохранение члена в базе данных
  }

  async findAll() {
    return await this.memberRepository.find();
  }

  async findOne(id: number) {
    return await this.memberRepository.findOne({ where: { id } });
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    await this.memberRepository.update(id, updateMemberDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.memberRepository.delete(id);
  }
}
