import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Pokemon } from './Pokemon';
import { Type } from './Type';

@Entity({ name: 'moves' })
export class Move {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  maxDmg: number;

  @Column()
  minDmg: number;

  @OneToOne(type => Type, type => type.move, {
    cascade: true
  })
  @JoinColumn()
  type: Type;

  @ManyToMany(type => Pokemon, pokemon => pokemon.moves)
  pokemon: Pokemon[];
}