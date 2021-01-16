import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  age: number;

  @Column()
  info: string;

  @Column({ default: false })
  infoHasBeenUpdated: boolean;
}
