const mongoose = require("mongoose");

const host = "mongodb://localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
  // const mongoStringConnection = "" + host + ":" + port + "/" + db;
  const mongoStringConnection =
    "mongodb+srv://alcardm:G5i9DvBvYQ65i0Ck@cluster0.p4r4ura.mongodb.net/" + db;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "error",
    console.error.bind(console, "MongoDB connection error")
  );
};
