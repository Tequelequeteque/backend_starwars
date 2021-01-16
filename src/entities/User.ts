import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  info: string;

  @Column()
  infoHasBeenUpdated: boolean;
}
