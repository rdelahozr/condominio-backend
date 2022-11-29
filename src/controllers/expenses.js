import Condominiumn from "../models/Condominiumn.js";
import Expenses from "../models/Expenses.js";

export const addExpense = async (req, res) => {
  try {
    const expense = Expenses(req.body);
    const newExpense = await expense.save();
    console.log(newExpense);
    res.status(200).send({
      message: `Added expense`,
      expense: newExpense
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export const updateExpense = async (req, res) => {
  try {
    // const condominiumn = Condominiumn(req.body);
    // const newCondominium = await condominiumn.save();
    // console.log(newCondominium);
    // res.status(200).send({
    //   message: `Added condominium`,
    //   rut: newCondominium.rut,
    //   name: newCondominium.name,
    // });
    res.status(200).send({ message: 'updated' });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export const getAllExpenses = async (req, res) => {
  try {
    const expensesGet = await Expenses.find();
    console.log(expensesGet);
    res.status(200).send(expensesGet);
  } catch (e) {
    console.error(e)
    res.status(500).send(e);
  }
}

export const getExpensesByCondominium = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id);
    const expensesGet = await Expenses.find({ condominium: id }).populate('appartment');
    console.log(expensesGet);
    res.status(200).send(expensesGet);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}
