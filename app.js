const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up on http://localhost:" + (process.env.PORT || 3000));
});
