const express = require("express");

const router = new express.Router();
const MensRanking = require("../models/mens");


// now we handle the post request

router.post("/mens", async (req, res) => {
  try {
    const AddmensRecord = new MensRanking(req.body);
    console.log(AddmensRecord);
    await AddmensRecord.save();
    res.status(201).send(AddmensRecord);
  } catch (err) {
    res.send(401).send(err);
  }
});

// get request
router.get("/mens", async (req, res) => {
  try {
    const getMensRecord = await MensRanking.find();
    res.status(201).send(getMensRecord);
  } catch (err) {
    res.send(401).send(err);
  }
});
// get the particular data : here get the data by name
router.get("/mens/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const getMensRecord = await MensRanking.find({
      name: "Zharnel HUGHES",
    }).sort({ ranking: 1 }); // 1 for ascending
    res.status(201).send(getMensRecord);
  } catch (err) {
    res.send(401).send(err);
  }
});

// update (put ,patch ) : update the record  by using the patch method
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMensRecord = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    }); // here new true for the displaying the updated record
    res.status(201).send(getMensRecord);
  } catch (err) {
    res.send(500).send(err);
  }
});

//DELETE METHOD

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMensRecord = await MensRanking.findByIdAndDelete(_id);
    res.status(201).send(getMensRecord);
  } catch (err) {
    res.send(500).send(err);
  }
});

module.exports = router;
