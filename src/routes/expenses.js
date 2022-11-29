import { Router } from "express";
import { addExpense, getAllExpenses, getExpensesByCondominium, updateExpense } from "../controllers/expenses.js";

const expensesRouter = Router();

//Inserta un condominio
expensesRouter.post("/expenses/add", addExpense);

//Obtiene los condominio
expensesRouter.get("/expenses/get", getAllExpenses);

//Obtiene los condominio por rut
expensesRouter.get("/expenses/get-by-rut", getExpensesByCondominium);

//Update un condominio
expensesRouter.put("/expenses/update", updateExpense);

export default expensesRouter;