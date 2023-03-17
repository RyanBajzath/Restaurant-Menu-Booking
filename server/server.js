const express = require("express");
const { ConnectionCheckOutFailedEvent } = require("mongodb");
const app = express();
const path = require("path");
port = process.env.PORT | 8000;

const cors = require("cors");

app.use(cors());

//import logic from handlers.js
const {
  getAllMenueOptions,
  getMenueByTheme,
  createAppointment,
  createTheme,
  updateTheme,
  deleteTheme,
} = require(`./handlers`);

// app
app.use(express.json());
// allow access to all content in public dir via "/"
app.use(express.static("public"));

//endpoints
app.get(`/menu`, getAllMenueOptions);
app.get(`/foodMenu/:theme`, getMenueByTheme);
app.post(`/menu`, createTheme);
app.patch(`/menu/:theme`, updateTheme);
app.delete(`/menu/:theme`, deleteTheme);

app.post(`/appointments`, createAppointment);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
