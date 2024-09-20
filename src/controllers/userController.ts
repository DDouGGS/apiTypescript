import { Request, Response, NextFunction } from 'express'
import { User } from '../models/user'
import { postgres } from '../dbs/postgres'
import { createHash } from 'node:crypto'
import propertysPostgres from '../dbs/propertysPostgres'

export class userController
{
  async add(req: Request, res: Response)
  {
    // new model
    const newUser : User = {
      id:       !req.body.id? 'gen_random_uuid()': req.body.id,
      username: req.body.username,
      typedoc:  !req.body.typedoc? 'cpf': req.body.typedoc,
      document: req.body.document,
      password: createHash('md5').update(req.body.password).digest('hex'),
      access:   req.body.access
    }

    let insert = "INSERT INTO users(id, username, typedoc, document, password, access) VALUES (" + newUser.id + ", '" + newUser.username + "', '" + newUser.typedoc + "', '" + newUser.document + "', '" + newUser.password + "', '" + newUser.access + "');"
    console.log(insert)

    // connection
    const pg = new postgres()
    const conn = await pg.conn()
    let ctrl = await conn.query( insert )
    console.log(ctrl)
    await conn.end()

    let rtn = { 'success': true, 'msg': null }
    if(!ctrl.rowCount){
      rtn = { 'success': false, 'msg': 'Erro na inclusão.' }
    }
    console.log(rtn)
    return rtn
  }
}
