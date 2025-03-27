import { ApiProperty } from '@nestjs/swagger';

export class CreateReceiptDto {
  @ApiProperty({ description: 'File name of the receipt' })
  file: string;

  @ApiProperty({ description: 'Member associated with the receipt', required: false })
  memberId?: number;

  @ApiProperty({ description: 'Partner associated with the receipt', required: false })
  partnerId?: number;
}
