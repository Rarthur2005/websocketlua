const wblib = require("ws")
5
const wss = new wblib.WebSocketServer({ port: 3000});
console.log(wss.port)
console.log(wss.path)

wss.on('connection', function connection(ws) {
  console.log("connected")
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
console.log("Server Started")
