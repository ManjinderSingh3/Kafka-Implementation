import { offset } from "highcharts";
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-first-kafka-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "consumer-group-1" });
// IMPORTANT !
// Under same Consumer-group only one consumer will receive messages and other consumers will not. This behaviour is same that of Redis Qiueue

const consume = async () => {
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

consume();
