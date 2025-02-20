import { offset } from "highcharts";
import { Kafka } from "kafkajs";
const kafka = new Kafka({
  clientId: "my-first-kafka-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "consumer-group-1" });

const produce = async () => {
  await producer.connect();
  await producer.send({
    topic: "topic-1",
    messages: [{ value: "Hello from Nodejs" }],
  });

  await consumer.connect();
  await consumer.subscribe({ topic: "topic-1", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (!message.value) {
        return;
      }
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

produce().catch(console.error);
