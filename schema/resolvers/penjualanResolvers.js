const db = require('../../db');

const penjualanResolvers = {
  Query: {
    semuaPenjualan: async () => {
      const [rows] = await db.promise().query('SELECT * FROM penjualan');
      return rows;
    },
    penjualan: async (_, { id }) => {
      const [rows] = await db.promise().query('SELECT * FROM penjualan WHERE id = ?', [id]);
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    },
  },
  Mutation: {
    tambahPenjualan: async (_, { pelanggan_id, tanggal, total }) => {
      const [result] = await db.promise().query(
        'INSERT INTO penjualan (pelanggan_id, tanggal, total) VALUES (?, ?, ?)',
        [pelanggan_id, tanggal, total]
      );
      return { id: result.insertId, pelanggan_id, tanggal, total };
    },
    
    ubahPenjualan: async (_, { id, pelanggan_id, tanggal, total }) => {
      const [result] = await db.promise().query(
        'UPDATE penjualan SET pelanggan_id = ?, tanggal = ?, total = ? WHERE id = ?',
        [pelanggan_id, tanggal, total, id]
      );
      if (result.affectedRows === 0) throw new Error('Penjualan tidak ditemukan');
      return { id, pelanggan_id, tanggal, total };
    },
    
    hapusPenjualan: async (_, { id }) => {
      const [result] = await db.promise().query('DELETE FROM penjualan WHERE id = ?', [id]);
      if (result.affectedRows === 0) throw new Error('Penjualan tidak ditemukan');
      return `Penjualan dengan ID ${id} berhasil dihapus`;
    },
  },
};

module.exports = penjualanResolvers;
