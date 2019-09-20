<<<<<<< HEAD
const db = require('../database/dbconfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update
};

function find() {
  return db('celebs').select('id', 'celebs_name', 'is_alive');
}
function findBy(filter) {
  return db('celebs').where(filter);
}
async function add(celeb) {
  const [id] = await db('celebs').insert(celeb);

  return findById(id);
}
function findById(id) {
  return db('celebs')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db('celebs')
    .where({ id })
    .update(changes);
}
=======
const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findByIdz
};

function find() {
    return db('celebs').select('id', 'username');
}

function findBy(filter) {
    return db('celebs').where(filter);
}

async function add(celebs) {
    const [id] = await db('celebs').insert(celebs);

    return findById(id);
}

function findById(id) {
    return db('celebs').where({id}).first();
}
>>>>>>> 23e2bbfb560cabd7c3c263c7e6277bac397d849e
