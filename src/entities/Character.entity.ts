import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface ICharacterResponse {
  uuid: string;
  name: string;
  age: number;
}

@Entity({ name: 'characters' })
export default class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'uuid', generated: 'uuid', unique: true })
  uuid: string;

  @Column({ nullable: false, type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ nullable: false, type: 'smallint', unsigned: true })
  age: number;

  @Column({
    name: 'has_been_update',
    nullable: false,
    type: 'boolean',
    default: false,
  })
  hasBeenUpdate: boolean;

  public toJson = (): ICharacterResponse =>
    ({
      uuid: this.uuid,
      name: this.name,
      age: this.age,
    } as ICharacterResponse);
}
