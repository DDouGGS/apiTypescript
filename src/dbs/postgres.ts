import pg from 'pg'
const { Client } = pg

export class postgres
{
  private static _conn: Client

  private constructor(propertys){}

  async conn()
  {
    if(!this._conn){
      this._conn = new Client({
        user: 'postgres.sefxhyaqoodrxwonkgdp',
        password: 'DDouGG@468677',
        host: 'aws-0-us-east-1.pooler.supabase.com',
        port: 5432,
        database: 'postgres',
      });
    }

    // connection
    await this._conn.connect()

    return this._conn
  }
}
