const pg = require('pg');

const pool = new pg.Pool({
    database: 'koala',
    port: 5432,
    ssl: false,
    max: 20,
    min: 4,
    idleTimeoutMillis: 1000
});

module.exports = pool;