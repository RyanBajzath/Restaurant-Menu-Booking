const express = require("express");
const app = express();
port = process.env.PORT | 8000;

app
  .get("/", function (req, res) {
    res.status(200).json({ status: 200, message: "Hello World!" });
  })

  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
