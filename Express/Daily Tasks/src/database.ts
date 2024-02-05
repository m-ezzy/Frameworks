import { Connection, createConnection, MysqlError } from 'mysql';

// import configs from './configs'

// import { databaseConnectionOptions } from './configs'

export let errors: any = []

const connect = async () => new Promise<Connection>((resolve, reject) => {
	// when deploying on google cloud
	// socketPath: '/cloudsql/my-project-12345:us-central1:mydatabase',

	const connection: Connection = createConnection({
		// socketPath: hostname,
		host: process.env.DB_HOSTNAME,
		port: Number(process.env.DB_PORT),
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	})
	connection.connect((error: MysqlError) => {
		if (error) {
      reject(error)
    } else {
			resolve(connection)
		}
  })
});
const query = async (query: string) => new Promise(async (resolve, reject) => {
	const connection: any = await connect();

	connection.query(query, connection, (error: MysqlError, rows: any) => {
		if (error) {
			reject(error)
		} else {
			resolve(JSON.parse(JSON.stringify(rows)))
		}
		connection.end();
	})
})

export { query }
