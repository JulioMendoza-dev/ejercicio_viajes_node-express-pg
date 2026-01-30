const { Pool } = require('pg')

const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: 'nicanoR2018',
database: 'plan_de_viajes',
allowExitOnIdle: true
})
const getDate = async () => {
const result = await pool.query("SELECT NOW()")
console.log(result.rows[0])
}


module.exports = pool;