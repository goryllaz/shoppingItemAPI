const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ShoppingItem = require("../schemes/shoppingItem");

router.get("/list", async function (req, res) {
  try {
    const shoppingItems = await ShoppingItem.find();
    res.status(200).json({
      itemList: shoppingItems,
      pageInfo: {
        pageIndex: 0,
        pageSize: 1000,
        total: shoppingItems.length,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/get", async function (req, res) {
  const id = new mongoose.Types.ObjectId(req.query.id);

  try {
    const stud = await ShoppingItem.findOne({ _id: id });

    res.status(200).json(stud);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/create", async function (req, res) {
  const newItem = new ShoppingItem({
    content: req.body.content,
    count: req.body.count,
    state: req.body.state,
  });
  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/update", async function (req, res) {
  const id = new mongoose.Types.ObjectId(req.body.id);

  try {
    const item = await ShoppingItem.findOneAndUpdate(
      {
        _id: id,
      },
      {
        content: req.body.content,
        count: req.body.count,
        state: req.body.state,
      },
      { returnOriginal: false },
    );
    res.status(202).json(item);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/delete", async function (req, res) {
  const id = new mongoose.Types.ObjectId(req.query.id);

  try {
    await ShoppingItem.findOneAndDelete({ _id: id });
    res.status(203).json({ id: id });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
});

module.exports = router;
