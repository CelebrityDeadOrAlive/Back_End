const router = require('express').Router();
const Celebs = require('./celebs-model.js');

router.get('/', (req, res) => {
  Celebs.find()
    .then(celebs => {
      res.json(celebs);
    })
    .catch(err => res.send(err));
});

router.post('/insert-celeb', (req, res) => {
  let celeb = req.body;
  Celebs.add(celeb)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//find celeb by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const findBy = await Celebs.findById(id);
    findBy
      ? res
          .status(200)
          .json(findBy)
          .end()
      : res.status(404).json({ message: 'No celeb by that id' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Sorry things are not working' });
  }
});

//update Celeb
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (req.body) {
      const updateCeleb = await Celebs.update(id, req.body);
      updateCeleb
        ? res
            .status(200)
            .json(req.body)
            .end()
        : res.status(404).json({ message: 'No celeb by that ID found' });
    } else {
      res.status(400).json({ message: 'Mhhm 400 stat' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'There was an error updating the user' });
  }
});

module.exports = router;
