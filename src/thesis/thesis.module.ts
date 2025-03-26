import { Module } from '@nestjs/common';
import { ThesisService } from './thesis.service';
import { ThesisController } from './thesis.controller';
import { Thesis } from './entities/thesis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Thesis])],
  controllers: [ThesisController],
  providers: [ThesisService],
})
export class ThesisModule {}
