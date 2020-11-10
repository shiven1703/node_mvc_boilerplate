const express = require("express");
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/shop", shopRoutes);


app.listen(5000, () => {
    console.log("Server started...");
});

