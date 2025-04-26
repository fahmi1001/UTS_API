CREATE DATABASE IF NOT EXISTS toko_kita_db;
USE toko_kita_db;

CREATE TABLE IF NOT EXISTS barang (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL,
    stok INT NOT NULL,
    kategori_id INT NOT NULL,
    FOREIGN KEY (kategori_id) REFERENCES kategori(id) -- assuming there's a 'kategori' table
);

INSERT INTO barang (nama, harga, stok, kategori_id) VALUES
('Laptop', 5000000.00, 10, 1),
('Mouse', 150000.00, 50, 2),
('Keyboard', 300000.00, 30, 2),
('Monitor', 2000000.00, 15, 1),
('Printer', 1000000.00, 5, 3);
