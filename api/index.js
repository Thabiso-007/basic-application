// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const userRoutes = require("./routes/users");

const app = express();

const port = 3080;

app.get("/", (req, res) => {
  res.send("welcome to the development api-server");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
