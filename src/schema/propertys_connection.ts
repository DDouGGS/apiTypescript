class propertys_connection_for_postgres
{
	let PGHOST: string = 'aws-0-us-east-1.pooler.supabase.com';
	let PGPORT: number = 5432;
	let PGUSER: string = 'postgres.sefxhyaqoodrxwonkgdp';
	let PGPASSWORD: string = 'DDouGG@468677';
	let PGDATABASE: string = 'postgres';

	constructor(host: string, port: number, user: string, password: string, schema: string)
	{
		this.PGHOST = host;
		this.PGPORT = port;
		this.PGUSER = user;
		this.PGPASSWORD = password;
		this.PGDATABASE = schema;
	}
}
