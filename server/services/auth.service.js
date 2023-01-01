//// services is a javascript file / reusable functions

const helloService = async () => {
  try {
    return "Hello Auth Service";
  } catch (error) {}
};

///// this kind of format is to export multiple functions
module.exports = {
  helloService
};
