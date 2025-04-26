const db = require('../../db');

const kategoriResolvers = {
  Query: {
    semuaKategori: async () => {
      const [rows] = await db.promise().query('SELECT * FROM kategori');
      return rows;
    },
    kategori: async (_, { id }) => {
      const [rows] = await db.promise().query('SELECT * FROM kategori WHERE id = ?', [id]);
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    },
  },
  Mutation: {
    tambahKategori: async (_, { nama }) => {
      const [result] = await db.promise().query(
        'INSERT INTO kategori (nama) VALUES (?)',
        [nama]
      );
      return { id: result.insertId, nama };
    },
    ubahKategori: async (_, { id, nama }) => {
      const [result] = await db.promise().query(
        'UPDATE kategori SET nama = ? WHERE id = ?',
        [nama, id]
      );
      if (result.affectedRows === 0) throw new Error('Kategori tidak ditemukan');
      return { id, nama };
    },
    hapusKategori: async (_, { id }) => {
      const [result] = await db.promise().query('DELETE FROM kategori WHERE id = ?', [id]);
      if (result.affectedRows === 0) throw new Error('Kategori tidak ditemukan');
      return `Kategori dengan ID ${id} berhasil dihapus`;
    },
  },
};

module.exports = kategoriResolvers;
