import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member/entities/member.entity';
import { Partner } from './partner/entities/partner.entity';
import { Employee } from './employee/entities/employee.entity';
import { Receipt } from './receipt/entities/receipt.entity';
import { Thesis } from './thesis/entities/thesis.entity';
import { MemberModule } from './member/member.module';
import { PartnerModule } from './partner/partner.module';
import { EmployeeModule } from './employee/employee.module';
import { ThesisModule } from './thesis/thesis.module';
import { ReceiptModule } from './receipt/receipt.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'nest_db',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Member, Partner, Employee, Receipt, Thesis]),
    MemberModule,
    PartnerModule,
    EmployeeModule,
    ThesisModule,
    ReceiptModule,
    MulterModule.register({ dest: './uploads' }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
