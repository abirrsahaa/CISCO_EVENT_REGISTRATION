const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://abirsaha453:2j7zL0ftiwozbli5@cluster0.iz1lxj7.mongodb.net/cisco"
    );
    console.log(
      "connection Instance: ",
      connectionInstance.connections[0].host
    );
    console.log("mongo db connected");
  } catch (error) {
    console.log("mongo db connection failed ", error);
    process.exit(1);
  }
};

module.exports = dbConnect;
