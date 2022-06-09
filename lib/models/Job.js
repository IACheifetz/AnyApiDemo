const pool = require('../utils/pool');
module.exports = class XivJob {
  id;
  name;
  type;
  armor;
  minlevel;
  requiresexpansion;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.armor = row.armor;
    this.minlevel = row.minlevel;
    this.requiresexpansion = row.requiresexpansion;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM xiv_jobs;');
    return rows.map((row) => new XivJob(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM xiv_jobs WHERE id=$1;', [id]);
    if(!rows[0]) return null;

    return new XivJob(rows[0]);
  }   
};
