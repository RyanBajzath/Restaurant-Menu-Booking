const express = require("express");
const { ConnectionCheckOutFailedEvent } = require("mongodb");
const app = express();
port = process.env.PORT | 8000;

//import logic from handlers.js
const {
  getAllMenueOptions,
  getMenueByTheme,
  createAppointment,
  createTheme,
} = require(`./handlers`);

app
  .use(express.json())
  //endpoints
  .get(`/menu`, getAllMenueOptions)
  .get(`/menue/:theme`, getMenueByTheme)
  .post(`/menu`, createTheme)
  .post(`/appointments`, createAppointment)

  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });

//Database shape can look like this;
//Collection called menu, inside the menu collection there can be theme objects.
//Inside those theme objects can be arrays of the items based on theme.

/*

menu collection
[
  themeName1:[themeItem1, themeItem2,themeItem3]
  themeName2:[themeItem1, themeItem2,themeItem3]
  themeName3:[themeItem1, themeItem2,themeItem3]
]


*/
