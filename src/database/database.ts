import 'reflect-metadata';
import { resolve } from 'path'
import { createConnection } from 'typeorm';
import { Pokemon } from '../entity/Pokemon';
import { Type } from '../entity/Type';
import { Move } from '../entity/Move';

createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USR,
  password: process.env.DB_PSWD,
  database: process.env.DB_NAME,
  port: 5432,
  entities: [
    resolve(__dirname, '..', 'entity/*.ts')
  ],
  synchronize: true,
  logging: false
})
  .then(async conn => {
    console.info('[DATABASE] Connection -> OK');

    // const type = new Type()
    // type.name = 'fogo'

    // const move = new Move()
    // move.maxDmg = 10
    // move.minDmg = 10
    // move.name = 'soco'
    // move.type = type

    // const pokemon = new Pokemon()
    // pokemon.name = 'teste'
    // pokemon.avatarUrl = 'teste'
    // pokemon.maxAtk = 10
    // pokemon.minAtk = 10
    // pokemon.maxDef = 10
    // pokemon.minDef = 10
    // pokemon.maxHp = 10
    // pokemon.minHp = 10
    // pokemon.pokedexNumber = '1'
    // pokemon.moves = [move]
    // pokemon.types = [type]

    // await conn.manager.save(type)
    // await conn.manager.save(move)
    // await conn.manager.save(pokemon)
  })
  .catch(err => {
    console.error(err);
  })