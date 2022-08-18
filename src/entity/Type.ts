import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Move } from './Move';
import { Pokemon } from './Pokemon';

@Entity({ name: 'types' })
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(type => Move, move => move.type)
  move: Move;

  @ManyToMany(type => Pokemon, pokemon => pokemon.types)
  pokemon: Pokemon[];
}