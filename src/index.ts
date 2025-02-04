import { Kafka } from "kafkajs";
const kafka = new Kafka({
  clientId: "my-first-kafka-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "consumer-group-1" });
