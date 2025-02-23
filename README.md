# Apache Kafka Implementation

## 1. Locally using Docker

`docker run -p 9092:9092 apache/kafka:3.7.1`

- Get Shell access to container

  `docker ps`

  Copy the `Container Id` of above running container. It will be used in next command.

  ```
  docker exec -it container_id /bin/bash
  cd /opt/kafka/bin
  ```

- Create a Topic

  `./kafka-topics.sh --create --topic topic-1 --bootstrap-server localhost:9092`

- Publish to the Topic

  `./kafka-console-producer.sh --topic topic-1 --bootstrap-server localhost:9092`

- Consuming from the Topic

  ` ./kafka-console-consumer.sh --topic topic-1 --from-beginning --bootstrap-server localhost:9092`

## 2. Using a NodeJs Process
