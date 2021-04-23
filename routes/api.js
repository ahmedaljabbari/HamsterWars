const express = require("express");

const router = express.Router();
const Hamster = require("../model/Hamster");

router.get("/", (req, res) => {
  Hamster.find()
    .sort({ createdAt: -1 })
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

router.get("/battle", (req, res) => {
  Hamster.find()
    .then((items) => {
      var el = "",
        el2 = "";
      while (el === el2) {
        el = items[Math.floor(Math.random() * items.length)];
        el2 = items[Math.floor(Math.random() * items.length)];
        if (el != el2) {
          break;
        }
      }
      //console.log([el, el2])
      res.json([el, el2]);
    })
    .catch((err) => console.log(err));
});

router.put("/battle", (req, res) => {
  const id = req.body.id;
  console.log("loser ===>  " + req.body.loser);
  console.log("winner ===>  " + req.body.name);
  Hamster.findOneAndUpdate(
    { name: req.body.name },
    { 
      wins: parseInt(req.body.wins),
      games: parseInt(req.body.games)
    },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  ).then(()=>{
    Hamster.findOneAndUpdate({name: req.body.loser}, 
      { 
        defeats: parseInt(req.body.loserDefeats),
        games: parseInt(req.body.loserGames)
      },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
    )
  })
  res.end();
});

router.get("/hamsters/:id", (req, res) => {
  const id = req.params.id;
  Hamster.findById(id)
    .then((item) => {
      console.log(item);
      res.json(item);
    })
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
  console.log(id);
  Hamster.findByIdAndDelete(id).then((hamster) => {
    console.log(hamster);
    res.json(hamster);
  });
});

module.exports = router;
