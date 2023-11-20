const { MongodHelper } = require("mongodb-prebuilt");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

module.exports = async function connect() {
  const dir = path.resolve(path.join(global.__basedir, "mongodb"));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const port = "27017";

  const mongoServer = new MongodHelper([
    "--port",
    port,
    "--dbpath",
    "./mongodb",
  ]);
  await mongoServer.run();
  const mongoUri = `mongodb://localhost:${port}`;
  console.info(`MongoDB running on ${mongoUri}`);

  await mongoose.connect(mongoUri, {
    dbName: "shoppingItemAPI",
  });
};
