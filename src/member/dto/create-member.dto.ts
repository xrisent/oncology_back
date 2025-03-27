import { ApiProperty } from '@nestjs/swagger';
import { Receipt } from 'src/receipt/entities/receipt.entity';

export class CreateMemberDto {
  @ApiProperty({ description: 'Full name of the member' })
  fullName: string;

  @ApiProperty({ description: 'Email of the member' })
  email: string;

  @ApiProperty({ description: 'Phone number of the member' })
  number: string;

  @ApiProperty({ description: 'Company name of the member' })
  companyName: string;

  @ApiProperty({ type: [Receipt], description: 'List of receipts associated with the member' })
  receipts: Receipt[]; // Указываем правильный тип для receipts
}
