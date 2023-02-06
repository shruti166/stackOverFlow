const connect = require("./configs/db.js");
const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter.js");
const quesRouter = require("./routes/quesRouter.js");
const cors = require("cors");
const app = express();
app.use(express.json());

connect();
app.use("/users", userRouter);
app.use("/user", quesRouter);
app.use("/q", quesRouter);
app.use("/upload", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
  } catch (e) {
    res.send("Welcome to stackoverflow clone");
  }
});

app.use(cors());
const port = 8000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
