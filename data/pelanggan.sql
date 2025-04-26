CREATE TABLE IF NOT EXISTS pelanggan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telepon VARCHAR(20) NOT NULL
);

INSERT INTO pelanggan (nama, email, telepon) VALUES
('Reza', 'reza@mail.com', '08987654321'),
('Andi', 'andi@mail.com', '08987654322'),
('Budi', 'budi@mail.com', '08987654323');
