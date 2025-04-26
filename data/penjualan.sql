CREATE DATABASE IF NOT EXISTS toko_kita_db;
USE toko_kita_db;

CREATE TABLE IF NOT EXISTS penjualan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pelanggan_id INT NOT NULL,
    tanggal DATE NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (pelanggan_id) REFERENCES pelanggan(id)
);

INSERT INTO penjualan (pelanggan_id, tanggal, total) VALUES
(1, '2025-04-26', 500000.00),
(2, '2025-04-27', 350000.00),
(3, '2025-04-28', 200000.00);
