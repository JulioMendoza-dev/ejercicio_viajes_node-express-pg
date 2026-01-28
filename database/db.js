const { Pool } = require ('pg');

const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    password : 'nicanoR2018',
    database : 'plan_de_viajes',
    allowExitOnIdle : true,
    port : 5432
})

const getDate = async () => {
    const res = await pool.query("SELECT NOW()");
    console.log(res.rows[0].now);
} 

getDate();

module.exports = pool;
