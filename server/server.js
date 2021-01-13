const path = require("path"); // directory connection

const publicPath = path.join(__dirname, "/../public");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.listen(port, function(){
  console.log("Server started at ${port}");
})
