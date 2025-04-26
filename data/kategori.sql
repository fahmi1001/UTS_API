CREATE DATABASE IF NOT EXISTS toko_kita_db;
USE toko_kita_db;

CREATE TABLE IF NOT EXISTS kategori (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL
);

INSERT INTO kategori (nama) VALUES
('Elektronik'),
('Aksesoris Komputer'),
('Peralatan Kantor');
