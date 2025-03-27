import { ApiProperty } from '@nestjs/swagger';
import { Receipt } from 'src/receipt/entities/receipt.entity';

export class CreatePartnerDto {
  @ApiProperty({ description: 'Full name of the partner' })
  fullName: string;

  @ApiProperty({ description: 'Email of the partner' })
  email: string;

  @ApiProperty({ description: 'Phone number of the partner' })
  number: string;

  @ApiProperty({ description: 'Company name of the partner' })
  companyName: string;

  @ApiProperty({ type: [Receipt], description: 'List of receipts associated with the partner' })
  receipts: Receipt[];
}
