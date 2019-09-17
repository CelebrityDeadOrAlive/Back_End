const router = require('express').Router();

const Celebs = require('./celebs-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    Celebs.find()
        .then(celebs => {
            res.json(celebs);
        })
        .catch(error => res.send(error));
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const celebs = await Celebs.findById(id);

        if (celebs) {
            res.json(celebs);
        } else {
            res.status(404).json({message: 'HeY! Theres no one here with that number.'})
        }
    } catch (error) {
        res.status(500).json({message: 'Its just not working today FAM'})
    }
});

module.exports = router; 