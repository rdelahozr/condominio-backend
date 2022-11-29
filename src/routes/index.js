import { Router } from "express";
import loginRoutes from "./users.js";
import condominiumnRoutes from "./condominium.js";
import propertiesRouter from "./properties.js";
import expensesRouter from "./expenses.js";
import commonPlacesRouter from "./common-places.js";
import reservationsRouter from "./reservation.js";

const router = Router();

router.use(loginRoutes);
router.use(condominiumnRoutes);
router.use(propertiesRouter);
router.use(expensesRouter);
router.use(commonPlacesRouter);
router.use(reservationsRouter);

export default router;
