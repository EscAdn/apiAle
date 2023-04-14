import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", routes);

app.listen(port, () =>
  console.log(`Tu server esta listo por el puerto ${port}`)
);
