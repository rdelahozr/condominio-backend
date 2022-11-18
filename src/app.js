import express from "express";
import indexRoutes from "./routes/index.route";
import loginRoutes from "./routes/login.route";
import condominiumnRoutes from "./routes/condominiumn.route";
import propertiesRouter from "./routes/properties.route";
import morgan from "morgan";
import cors from "cors";

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use(indexRoutes);
app.use(loginRoutes);
app.use(condominiumnRoutes);
app.use(propertiesRouter);

export default app;
