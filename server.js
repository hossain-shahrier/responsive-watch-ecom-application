// DotEnv
require("dotenv").config();
// Dependencies
const initRoutes = require("./routes/web");
const expressLayouts = require("express-ejs-layouts");
// create a new express server
const express = require("express");
const path = require("path");
const app = express();

// JSON
app.use(express.json());
// URL Encoded
app.use(express.urlencoded({ extended: false }));
// Assets
app.use(express.static(path.join(__dirname, "public")));
// Tempalte Engine
app.use(expressLayouts);
// Set the view engine to ejs
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

// routes
initRoutes(app);
// 404 not found error page
app.use((req, res) => {
  res.status(404).render("errors/404");
});

// Database

// Session Configuration

// Port
const port = process.env.PORT || 3000;
// Listen to port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
