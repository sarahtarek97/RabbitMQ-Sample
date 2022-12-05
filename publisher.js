const amqplib = require("amqplib/callback_api");

amqplib.connect("amqp://localhost", (connError, connection) => {
  if (connError) {
    throw connError;
  }
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }
    const QUEUE = "coding";
    channel.assertQueue(QUEUE);

    channel.sendToQueue(QUEUE, Buffer.from("hello from publisher!"));
    console.log(`Message sent ${QUEUE}`);
  });
});
