const express = require("express");
const fs = require("fs");
const db = require("./db/db.json");
const exp = require("constants");


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.use(require("./routes/apiRoutes.js"))
app.use(require("./routes/htmlRoutes.js"))


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});







