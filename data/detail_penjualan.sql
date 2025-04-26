CREATE DATABASE IF NOT EXISTS toko_kita_db;
USE toko_kita_db;

CREATE TABLE IF NOT EXISTS detail_penjualan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    penjualan_id INT NOT NULL,
    barang_id INT NOT NULL,
    jumlah INT NOT NULL,
    harga_satuan DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (penjualan_id) REFERENCES penjualan(id),
    FOREIGN KEY (barang_id) REFERENCES barang(id)
);

INSERT INTO detail_penjualan (penjualan_id, barang_id, jumlah, harga_satuan) VALUES
(1, 1, 2, 100000.00),
(1, 3, 1, 150000.00),
(2, 2, 3, 70000.00),
(3, 1, 1, 100000.00);
