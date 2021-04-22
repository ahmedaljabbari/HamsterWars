const express = require('express');

const router = express.Router();
const Hamster = require('../model/Hamster');


router.get('/', (req, res) => {
  Hamster.find().sort({createdAt: -1})
    .then(items => res.json(items))
    .catch(err => console.log(err))
})

router.get("/:id", (req, res) =>{
  const id = req.params.id;
  Hamster.findById(id).then((item) => {
    console.log(item)
    res.json(item)
  })
  .catch(err => console.log(err))
})


router.post('/', (req, res) => {
  Hamster.create(req.body)
    .then((hamster) => {
        console.log(hamster);
        res.json(hamster)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    Hamster.findByIdAndDelete(id)
    .then((hamster) => {
        console.log(hamster);
        res.json(hamster)
    })
})

module.exports = router;