const mongoose = require("mongoose");

module.exports = class ConnectDB {
  static db() {
    mongoose
      .connect("mongodb://localhost:27017/marvat1",
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
  
 