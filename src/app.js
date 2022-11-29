import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from './routes/index.js'

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use(router);


export default app;
