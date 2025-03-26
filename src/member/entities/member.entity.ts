import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Receipt } from '../../receipt/entities/receipt.entity';

@Entity('member')
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  number: string;

  @Column()
  companyName: string;

  @OneToMany(() => Receipt, (receipt) => receipt.member)
  receipts: Receipt[];
}
