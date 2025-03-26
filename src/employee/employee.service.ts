import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity'; // Импортируем сущность Employee
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>, // Репозиторий для работы с сущностью Employee
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = this.employeeRepository.create(createEmployeeDto); // Создаем нового сотрудника
    return await this.employeeRepository.save(newEmployee); // Сохраняем в базе данных
  }

  async findAll() {
    return await this.employeeRepository.find(); // Получаем всех сотрудников
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne({
      where: { id }, // Используем параметр where для поиска по ID
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeeRepository.update(id, updateEmployeeDto); // Обновляем сотрудника по ID
    return this.findOne(id); // Возвращаем обновленного сотрудника
  }

  async remove(id: number) {
    await this.employeeRepository.delete(id); // Удаляем сотрудника по ID
    return { deleted: true }; // Ответ, что удаление прошло успешно
  }
}
