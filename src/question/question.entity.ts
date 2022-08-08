import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  question: string;
}
