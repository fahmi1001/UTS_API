const db = require('../../db');

const barangResolvers = {
  Query: {
    semuaBarang: async () => {
      const [rows] = await db.promise().query('SELECT * FROM barang');
      return rows;
    },
    barang: async (_, { id }) => {
      const [rows] = await db.promise().query('SELECT * FROM barang WHERE id = ?', [id]);
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    },
  },
  Mutation: {
    tambahBarang: async (_, { nama, harga, stok, kategori_id }) => {
      const [result] = await db.promise().query(
        'INSERT INTO barang (nama, harga, stok, kategori_id) VALUES (?, ?, ?, ?)',
        [nama, harga, stok, kategori_id]
      );
      return { id: result.insertId, nama, harga, stok, kategori_id };
    },
    ubahBarang: async (_, { id, nama, harga, stok, kategori_id }) => {
      const [result] = await db.promise().query(
        'UPDATE barang SET nama = ?, harga = ?, stok = ?, kategori_id = ? WHERE id = ?',
        [nama, harga, stok, kategori_id, id]
      );
      if (result.affectedRows === 0) throw new Error('Barang tidak ditemukan');
      return { id, nama, harga, stok, kategori_id };
    },
    hapusBarang: async (_, { id }) => {
      const [result] = await db.promise().query('DELETE FROM barang WHERE id = ?', [id]);
      if (result.affectedRows === 0) throw new Error('Barang tidak ditemukan');
      return `Barang dengan ID ${id} berhasil dihapus`;
    },
  },
};

module.exports = barangResolvers;
