const { Db } = require("mongodb");

// Import MongoDB key from .env
require(`dotenv`).config();

//Connect to MongoDB, following mongoDB documentation
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(MONGO_URI, options);
const db = client.db("restaurant");

//Get all Menu items (READ)
const getAllMenueOptions = async (req, res) => {
  try {
    //connect collection and perfom method
    const result = await db.collection("menu").find().toArray();
    //check is result exists then send the data from mongoDB
    result
      ? res.status(200).json({ status: 201, data: result })
      : res.status(404).json({ status: 404, data: "Not Found" });
  } catch (err) {
    res.status(500).json({ status: 500, data: err });
  }
};

//Get Menu items by theme :param (READ)
const getMenueByTheme = async (req, res) => {
  //assign variable to req.params. This is whats sent from the Front-End.
  const theme = req.params.theme;
  console.log(theme);
  try {
    //connect collection and perfrom mongoDB mothod
    const result = await db.collection("menu").findOne({ theme: theme });

    result
      ? res.status(200).json({ status: 200, data: result })
      : res.status(404).json({ status: 404, data: result });
  } catch (err) {
    res.status(500).json({ status: 500, data: err });
  }
};

//Create Theme (POST)
const createTheme = async (req, res) => {
  try {
    const result = await db.collection("menu").insertOne(req.body);
    return res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(500).json({ status: 500, data: err });
  }
};

// create Appointment
const createAppointment = async (req, res) => {};

// export handlers
module.exports = {
  getAllMenueOptions,
  getMenueByTheme,
  createAppointment,
  createTheme,
};
