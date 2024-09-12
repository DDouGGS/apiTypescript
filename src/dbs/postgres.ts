import pg from 'pg'
const { Client } = pg

export class postgres
{
  private static _conn: Client;

  private constructor(){}

  public static async function conn(propertys)
  {
    if(!this._conn){
      this._conn = new Client({
        user: propertys.username,
        password: propertys.password,
        host: propertys.hostname,
        port: propertys.port,
        database: propertys.database,
      });
    }
    await this._conn.connect();
    // connection
    this._conn.then(() => {
  		console.log('Connected to PostgreSQL database');
  	});
  	this._conn.catch((err) => {
  		console.error('Error connecting to PostgreSQL database', err);
  	});
    return $this._conn;
    }
}
