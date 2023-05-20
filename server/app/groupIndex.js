const { startServer } = require("../socket-group-manager");

startServer({
  port: 1596,
  onMessage: (msg, sender) => {
    console.log(msg.toString());
  },
  onConnection: (server) => {
    console.log(server);
  },
});
