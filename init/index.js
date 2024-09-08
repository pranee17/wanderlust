const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
    console.log("Connected to DB");
  } catch (error) {
    console.error("Failed to connect to DB:", error);
  }
}
main();

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66d02256badd11688071cdb5",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
