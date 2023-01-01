/// used/called the services
const { helloService } = require("../services/auth.service");

const authController = {
  async hello() {
    const userHello = helloService();

    console.log(userHello);
    console.log("Hello Auth Controller");
  }
};

module.exports = authController;
