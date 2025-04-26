const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'toko_kita_db'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to database:', err);
    return;
  }
  console.log('✅ MySQL connected!');
});

module.exports = db;
