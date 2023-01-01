/// used/called the services

const { authService } = require("../services");

const authController = {
  async hello() {
    try {
      const userHello = await authService.hello();
      console.log(userHello);
    } catch (error) {}
  }

  // async hello() {
  //   const userHello = helloService();

  //   console.log(userHello);
  //   console.log("Hello Auth Controller");
  // }
};

module.exports = authController;
