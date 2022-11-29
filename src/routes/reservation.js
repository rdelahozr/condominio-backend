import { Router } from "express";
import { addExpense, getAllExpenses, getExpensesByCondominium, updateExpense } from "../controllers/expenses.js";

const reservationsRouter = Router();

//Inserta un condominio
reservationsRouter.post("/reservation/add", addExpense);

//Obtiene los condominio
reservationsRouter.get("/reservation/get", getAllExpenses);

//Obtiene los condominio por rut
reservationsRouter.get("/reservation/get-by-rut", getExpensesByCondominium);

//Update un condominio
reservationsRouter.put("/reservation/update", updateExpense);

export default reservationsRouter;