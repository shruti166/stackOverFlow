const express = require("express");

const questions = require("../models/questionModel");
const quesRouter = express.Router();

quesRouter.post("/ques", async (req, res) => {
  const questionData = new questions({
    title: req.body.title,
    body: req.body.body,
    tags: req.body.tag,
  });
  await questionData
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: "Question not added successfully",
      });
    });
});

quesRouter.get("/getques", async(req, res) => {
  const allQues = await questions.find();
  res.send(allQues);
  console.log(allQues);
})


module.exports = quesRouter;
