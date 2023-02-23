const mongoose = require("mongoose");

module.exports = class ConnectDB {
  static db() {
    mongoose
      .connect("mongodb://DATABASE_USER:DATABASE_PASSWORD@127.0.0.1:27017/DE",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("db is connected");
      })
      .catch((e) => {
        console.log(e);
      });
  }
}; 
  
 