//DONT EDIT

const { Client } = require('pg');

const connectionString =
  process.env.DATABASE_URL || 'postgres://bestbooks_user:4v2HWhi4xNIJySHlV6Q7CZMe3OgAdnAD@dpg-ce7u6ssgqg40knuhd520-a.ohio-postgres.render.com/bestbooks';


const client = new Client({
  connectionString,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;