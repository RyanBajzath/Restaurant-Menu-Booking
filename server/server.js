const express = require("express");
const { ConnectionCheckOutFailedEvent } = require("mongodb");
const app = express();
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

//Database shape can look like this;
//Collection called menu, inside the menu collection there can be theme objects.
//Inside those theme objects can be arrays of the items based on theme.

/*

menu collection
{
  theme: drinks
  themeList:[drink1,drink2,drink3]
},
{
  theme:food
  themeList:[food1, food2, food3]},
{
  theme:dessert
  themeList:[dessert1, dessert2, dessert3]}


*/
