import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-first-kafka-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const produce = async () => {
  await producer.connect();
  await producer.send({
    topic: "topic-1",
    messages: [
      {
        value: "Hello from NodeJS process",
      },
    ],
  });
};

produce();
