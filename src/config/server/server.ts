import express from "express";
import * as Middleware from "../interceptors/middleware";
import * as Routes from "../../api";
import { db } from "../connection/database";
import * as Kafka from "../stream/kafka";
import UserFacade from "../../facade/User/facade";

/**
 * @constant {express.Application}
 */
const app: express.Application = express();

/**
 * @constructs express.Application Middleware
 */
//Middleware.configure(app);

/**
 * @constructs express.Application Routes
 */
Routes.init(app);

// initialize db
db.authenticate()
  .then(() => {
    console.log("Connected to Database");
    db.sync();
  })
  .catch((err) => console.error("Error connecting database", err));

// initialize Kafka
let allTopics = ["user-service-topic"];
let topicsToSubscribe = ["user-service-topic"];

Kafka.init(allTopics)
  .then(async () => {
    await Kafka.suscribe(
      topicsToSubscribe,
      (topic: any, partition: any, message: any) => {
        console.log(
          "Topic: ",
          topic,
          "Partition: ",
          partition,
          "Message: ",
          message?.value?.toString()
        );

        if (topic === "user-service-topic") {
          UserFacade.consumer_delete_user(Number(message?.value?.toString()));
        }
      }
    );
    console.log("Connected to Kafka");
  })
  .catch((err) => console.error("Error connecting kafka", err));

/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);

/**
 * sets port 9100 to default or unless otherwise specified in the environment
 */
app.set("port", process.env.PORT || 9100);

/**
 * sets secret to 'superSecret', otherwise specified in the environment
 */
app.set("secret", process.env.SECRET || "superSecret");

/**
 * @exports {express.Application}
 */
export default app;
