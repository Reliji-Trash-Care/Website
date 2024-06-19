CREATE DATABASE reliji_trash_care;

USE reliji_trash_care;

CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    nomor_telepon VARCHAR(20) NOT NULL,
    alamat TEXT NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('User', 'Admin') NOT NULL DEFAULT 'User',
    INDEX (email)
);

CREATE TABLE Berita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul_berita VARCHAR(255) NOT NULL,
    penulis_id INT NOT NULL,
    nama_penerbit VARCHAR(255) NOT NULL,
    isi_berita TEXT NOT NULL,
    gambar VARCHAR(255),
    FOREIGN KEY (penulis_id) REFERENCES User(id) ON DELETE CASCADE, -- Menambahkan foreign key untuk penulis_id
    INDEX (judul_berita)
);

CREATE TABLE Jadwal_Sampah (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    waktu DATETIME NOT NULL,
    notifikasi BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    INDEX (user_id)
);

CREATE TABLE Tagihan_Iuran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    nominal_pembayaran DECIMAL(10, 2) NOT NULL,
    periode_pembayaran VARCHAR(50) NOT NULL,
    metode_pembayaran VARCHAR(50) NOT NULL,
    status_pembayaran ENUM('Lunas', 'Belum Lunas') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    INDEX (user_id)
);

CREATE TABLE Deteksi_Sampah (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    admin_id INT,
    gambar VARCHAR(255) NOT NULL,
    hasil_deteksi TEXT,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE SET NULL,
    FOREIGN KEY (admin_id) REFERENCES User(id) ON DELETE SET NULL,
    INDEX (user_id),
    INDEX (admin_id)
);

CREATE TABLE Log_Aktivitas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    aktivitas VARCHAR(255) NOT NULL,
    waktu TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    INDEX (user_id)
);
