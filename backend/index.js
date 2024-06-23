import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = "your_secret_key";

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reliji_trash_care'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to the MySQL server.');
  }
});

// Register route
app.post('/register', async (req, res) => {
  const { email, nama, nomorTelepon, alamat, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO User (nama, email, nomor_telepon, alamat, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nama, email, nomorTelepon, alamat, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error in SQL query:', err);
      return res.status(500).json({ error: 'Error registering user', details: err.message });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`Received login request with email: ${email} and password: ${password}`); // Log email and password

  const sql = 'SELECT * FROM user WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('Error in SQL query:', err);
      return res.status(500).json({ error: 'Database error', details: err.message });
    }

    if (results.length === 0) {
      console.log('No user found'); // Log if user not found
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    console.log(`User found: ${user.email}`); // Log if user found

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(`Password valid: ${isPasswordValid}`); // Log password validation result

    if (!isPasswordValid) {
      console.log('Invalid password'); // Log if password is invalid
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
