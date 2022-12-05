const amqplib = require("amqplib/callback_api");

amqplib.connect("amqp://localhost", (connError, connection) => {
  if (connError) {
    console.log("xxx");
    throw connError;
  }
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      console.log("yy");

      throw channelError;
    }
    const QUEUE = "coding";
    channel.assertQueue(QUEUE);

    channel.consume(QUEUE, (msg) => {
      console.log(`Message recieved: ${msg.content.toString()}`);
    });
  });
});
