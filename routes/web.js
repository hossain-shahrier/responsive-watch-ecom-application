// Import your Controllers here
// Controllers can be imported from ..app/http/controllers/

const HomeController = require("../app/Http/Controllers/HomeController");

// Import your Middlewares here
// Controllers can be imported from ..app/http/middlewares/

// Route initialization
function initRoutes(app) {
  // Home route
  app.get("/", HomeController().index);
}

module.exports = initRoutes;
