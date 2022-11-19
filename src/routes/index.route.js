import { Router } from "express";
import loginRoutes from "./login.route.js";
import condominiumnRoutes from "./condominiumn.route.js";
import propertiesRouter from "./properties.route.js";

const router = Router();

router.use(loginRoutes);
router.use(condominiumnRoutes);
router.use(propertiesRouter);

export default router;
