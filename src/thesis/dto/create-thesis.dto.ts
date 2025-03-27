import { ApiProperty } from '@nestjs/swagger';

export class CreateThesisDto {
  @ApiProperty({ description: 'Full name of the thesis author' })
  fullName: string;

  @ApiProperty({ description: 'Email of the thesis author' })
  email: string;

  @ApiProperty({ description: 'Phone number of the thesis author' })
  number: string;

  @ApiProperty({ description: 'Company name of the thesis author' })
  companyName: string;

  @ApiProperty({ description: 'File associated with the thesis' })
  file: string;
}
