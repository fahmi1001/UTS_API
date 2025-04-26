const db = require('../../db');

const pelangganResolvers = {
  Query: {
    semuaPelanggan: async () => {
      const [rows] = await db.promise().query('SELECT * FROM pelanggan');
      return rows;
    },
    pelanggan: async (_, { id }) => {
      const [rows] = await db.promise().query('SELECT * FROM pelanggan WHERE id = ?', [id]);
      if (rows.length === 0) {
        throw new Error(`Pelanggan dengan ID ${id} tidak ditemukan.`);
      }
      return rows[0];
    },
  },
  Mutation: {
    tambahPelanggan: async (_, { nama, email, telepon }) => {
      const [result] = await db.promise().query(
        'INSERT INTO pelanggan (nama, email, telepon) VALUES (?, ?, ?)',
        [nama, email, telepon]
      );
      return { id: result.insertId, nama, email, telepon };
    },
    ubahPelanggan: async (_, { id, nama, email, telepon }) => {
      const [result] = await db.promise().query(
        'UPDATE pelanggan SET nama = ?, email = ?, telepon = ? WHERE id = ?',
        [nama, email, telepon, id]
      );
      if (result.affectedRows === 0) throw new Error(`Pelanggan dengan ID ${id} tidak ditemukan.`);
      return `Pelanggan dengan ID ${id} berhasil diubah.`;
    },
    hapusPelanggan: async (_, { id }) => {
      const [result] = await db.promise().query('DELETE FROM pelanggan WHERE id = ?', [id]);
      if (result.affectedRows === 0) throw new Error(`Pelanggan dengan ID ${id} tidak ditemukan.`);
      return `Pelanggan dengan ID ${id} berhasil dihapus.`;
    },
  },
};

module.exports = pelangganResolvers;
