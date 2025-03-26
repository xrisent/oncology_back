import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberModule } from './member/member.module';
import { PartnerModule } from './partner/partner.module';
import { EmployeeModule } from './employee/employee.module';
import { ReceiptModule } from './receipt/receipt.module';
import { ThesisModule } from './thesis/thesis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'nest_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MemberModule,
    PartnerModule,
    EmployeeModule,
    ReceiptModule,
    ThesisModule,
  ],
})
export class AppModule {}
