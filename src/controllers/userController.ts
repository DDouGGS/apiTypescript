import { Request, Response, NextFunction } from 'express'
import { User } from '../models/user'
import { postgres } from '../dbs/postgres'
import { createHash } from 'node:crypto'
import propertysPostgres from '../dbs/propertysPostgres'

export class userController
{
  add(req: Request, res: Response): string
  {
    // new model
    const newUser : User = {
      username: req.body.username,
      typedoc:  !req.body.typedoc? null: req.body.typedoc,
      document: req.body.document,
      password: createHash('md5').update(req.body.password).digest('hex'),
      access:   req.body.access
    }

    let insert = "INSERT INTO users (username, typedoc, document, password, access) VALUES ('" + newUser.username + "', '" + newUser.typedoc + "', '" + newUser.document + "', '" + newUser.password + "', '" + newUser.access + "');"
    // connection
    const pg   = new postgres()
    const conn = pg.conn()
    const ctrl = conn.query( insert )
    conn.end()

    if(!crtl){
      return {success: false}
    }
    return {success: true}
  }
}
