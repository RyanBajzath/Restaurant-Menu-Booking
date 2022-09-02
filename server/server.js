const express = require("express");
const app = express();
port = process.env.PORT | 8000;

//import logic from handlers.js
const {
  getAllMenueOptions,
  getMenueByTheme,
  createAppointment,
} = require(`./handlers`);

app
  .use(express.json())
  //endpoints
  .get(`/menu`, getAllMenueOptions)
  .get(`menue/:theme`, getMenueByTheme)
  .post(`appointments`, createAppointment)

  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
