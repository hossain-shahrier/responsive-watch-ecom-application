function HomeController() {
  return {
    index: async (req, res) => {
      res.render("home");
    },
  };
}
module.exports = HomeController;
