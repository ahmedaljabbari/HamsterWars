const express = require("express");
const Hamster = require("../models/Hamster");

const router = express.Router();

router.get("/", (req, res) => {
  Hamster.find()
    .sort({ createdAt: -1 })
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});


router.post("/", (req, res) => {
  Hamster.create(req.body).then((hamster) => {
    console.log(hamster);
    res.json(hamster);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  //console.log(id);
  Hamster.findByIdAndDelete(id).then((product) => {
    console.log(product);
    res.json({ Success : true});
  })
  .catch(err => console.log(err))
});

module.exports = router;
