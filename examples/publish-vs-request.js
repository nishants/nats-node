/*
Comparing request and publish
------------------------------
If you just want to send data, use publish, if you want ot send data and
expect a response from server use request.
request uses publish internally though
*/

const NATS = require("nats");
const nats = NATS.connect('localhost:4222', {json:true});


nats.subscribe('mynats.publisher-vs-request', (message, reply, subject, sid) => {
  console.log('subscribe#mynats.publisher-vs-request', {message, reply, subject, sid});
  nats.publish(reply, `got message from ${reply}`);
});

/*
// Logged from listener
subscribe#mynats.publisher-vs-request {
  message: { source: 'request' },
  reply: '_INBOX.BSQVHYOWG0D6MM9NOIPQT8.BSQVHYOWG0D6MM9NOIPQXF',
  subject: 'mynats.publisher-vs-request',
  sid: 1
}

*/
nats.request("mynats.publisher-vs-request", {source : "request"}, () => {
  console.log('request#mynats.publisher-vs-request', {arguments})
});

/*
// Logged from listener
subscribe#mynats.publisher-vs-request {
  message: { source: 'publish' },
  reply: 'reply-to-publish',
  subject: 'mynats.publisher-vs-request',
  sid: 1
}
*/
nats.publish("mynats.publisher-vs-request", {source : "publish"}, "reply-to-publish", "", () => {
  console.log('publish#mynats.publisher-vs-request', {arguments})
});
