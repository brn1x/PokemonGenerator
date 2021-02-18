import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Move } from './Move';
import { Type } from './Type';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatarUrl: string;

  @Column()
  pokedexNumber: string;

  @Column()
  maxHp: number;

  @Column()
  minHp: number;

  @Column()
  maxAtk: number;

  @Column()
  minAtk: number;

  @Column()
  maxDef: number;

  @Column()
  minDef: number;

  @ManyToMany(type => Type, type => type.pokemon)
  @JoinTable()
  types: Type[];

  @ManyToMany(type => Move, move => move.pokemon)
  @JoinTable()
  moves: Move[];
}