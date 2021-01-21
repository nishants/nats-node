/*
How to publish data to multiple subscribers ?
---------------------------------------------
Use case :
- servers have certain session ids
- clients search for session ids, if server has the session id, it responds
- client starts sending the messages to the server

*/
const NATS = require("nats");
const nats = NATS.connect('localhost:4222', {json:true});

const createServer = (serverName, sessions) => {
  nats.subscribe("search.find-session", (message, replyTo) => {
    if(sessions.includes(message.sessionId)){
      return nats.publish(replyTo, serverName);
    }
  });

  nats.subscribe(`server.${serverName}`, (message) => {
    console.log(`${serverName} served ${message}`);
  });
};

const sendMessage = (sessionId, message) => {
  nats.request('search.find-session', {sessionId},(serverName) => {
    nats.publish(`server.${serverName}`, message);
  });
};

createServer('server-1', ['1', '11', '111']);
createServer('server-2', ['2', '22', '222']);

sendMessage('1', "1-message");
sendMessage('12', "12-message");
sendMessage('222', "222-message");
sendMessage('111', "111-message");
sendMessage('111', "111-message");
sendMessage('2', "2-message");

