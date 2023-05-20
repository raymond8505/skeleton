const { startServer } = require("../socket-manager");

const connections = [];
/**
 * Handles all messages coming from the client. This is your entry point to your server's actual
 * functionality
 * @param msg:Buffer the message data sent from the client
 * @param sender:WebSocket
 * @param server:WebSocketServer
 */
function onMessage(msg, sender, server) {
  sender.send("Server Connected");
  console.log("message received", msg.toString());
}

/**
 * When the client makes a connection. Use this to initialize stuff for
 * the server app
 * @param socket:WebSocket
 * @param server:WebSocketServer
 */
function onConnection(socket, server) {
  connections.push(socket);

  broadcast("new connection");
}

/**
 * Called before the socket server is initialized. Fires before the first connection
 * @param server:WebSocketServer
 * @returns a Promise that, when resolved, initializes the socket server
 */
function init(server) {
  return new Promise((resolve, reject) => {
    resolve(null);
  });
}

function broadcast(msg) {
  connections.forEach((socket) => {
    socket.send(msg);
  });
}

startServer({
  onMessage,
  onConnection,
  init,
});
