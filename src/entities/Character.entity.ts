import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({ nullable: false, type: 'smallint' })
  age: number;

  @Column({ default: false })
  infoHasBeenUpdated: boolean;
}
