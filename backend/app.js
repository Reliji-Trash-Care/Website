import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2/promise';

const app = express();
app.use(bodyParser.json());

// Konfigurasi koneksi database
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reliji_trash_care'
});

// Endpoint untuk pendaftaran
app.post('/api/signup', async (req, res) => {
  const { nama, email, nomor_telepon, alamat, password } = req.body;

  // Validasi data
  if (!nama || !email || !nomor_telepon || !alamat || !password) {
    return res.status(400).json({ message: 'Semua field harus diisi' });
  }

  try {
    // Simpan data ke database
    const query = 'INSERT INTO User (nama, email, nomor_telepon, alamat, password) VALUES (?, ?, ?, ?, ?)';
    await db.query(query, [nama, email, nomor_telepon, alamat, password]);
    res.status(201).json({ message: 'User berhasil didaftarkan' });
  } catch (err) {
    console.error('Error saving user to database:', err);
    res.status(500).json({ message: 'Error saving user to database' });
  }
});

app.listen(3001, () => {
  console.log('Server berjalan pada port 3001');
});
