const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const hotelsRouter = require("./routes/hotels");
const roomsRouter = require("./routes/rooms");
const usersRouter = require("./routes/users");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
mongoose.connect(process.env.MONGO).catch((err) => {
  if (err)
    console.log(
      "erererererereererreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      err
    );
  else console.log("mongdb is connected");
});

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(8800, () => {
  console.log("server is loading");
});
