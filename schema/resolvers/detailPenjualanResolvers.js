const db = require('../../db');

const detailPenjualanResolvers = {
  Query: {
    semuaDetailPenjualan: async () => {
      const [rows] = await db.promise().query('SELECT * FROM detail_penjualan');
      return rows;
    },
    detailPenjualan: async (_, { id }) => {
      const [rows] = await db.promise().query('SELECT * FROM detail_penjualan WHERE id = ?', [id]);
      if (rows.length === 0) {
        return null;
      }
      return rows[0];
    },
  },
  Mutation: {
    tambahDetailPenjualan: async (_, { penjualan_id, barang_id, jumlah, harga_satuan }) => {
      const [result] = await db.promise().query(
        'INSERT INTO detail_penjualan (penjualan_id, barang_id, jumlah, harga_satuan) VALUES (?, ?, ?, ?)',
        [penjualan_id, barang_id, jumlah, harga_satuan]
      );
      return { id: result.insertId, penjualan_id, barang_id, jumlah, harga_satuan };
    },
    
    ubahDetailPenjualan: async (_, { id, penjualan_id, barang_id, jumlah, harga_satuan }) => {
      const [result] = await db.promise().query(
        'UPDATE detail_penjualan SET penjualan_id = ?, barang_id = ?, jumlah = ?, harga_satuan = ? WHERE id = ?',
        [penjualan_id, barang_id, jumlah, harga_satuan, id]
      );
      if (result.affectedRows === 0) throw new Error('Detail Penjualan tidak ditemukan');
      return { id, penjualan_id, barang_id, jumlah, harga_satuan };
    },
    
    hapusDetailPenjualan: async (_, { id }) => {
      const [result] = await db.promise().query('DELETE FROM detail_penjualan WHERE id = ?', [id]);
      if (result.affectedRows === 0) throw new Error('Detail Penjualan tidak ditemukan');
      return `Detail Penjualan dengan ID ${id} berhasil dihapus`;
    },
  },
};

module.exports = detailPenjualanResolvers;
