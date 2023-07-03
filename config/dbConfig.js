const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
const connection = mongoose.connection;
connection.on("connected", () => {
    console.log("mongodb is connection is successfull");
})
connection.on("error", (error) => {
    console.log("Error in mongo", error);
})
module.exports=mongoose;