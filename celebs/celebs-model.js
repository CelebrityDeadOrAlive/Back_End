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