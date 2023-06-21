// third party packages import
import express from "express";
import morgan from "morgan";
import "dotenv/config.js";
import cors from "cors";

// core modules import
import { resolve } from "path";
import { createWriteStream } from "fs";

// other modules import
import errorHandler from "./middlewares/errorHandler.js";
import { PORT } from "./config.js";

// all routes import
import allRoutes from "./routes/all.routes.js";


const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(resolve("uploads")));


// setup the logger
const accessLogStream = createWriteStream(resolve("access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));

// all routes
app.use(allRoutes);

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running port: ${PORT}`));