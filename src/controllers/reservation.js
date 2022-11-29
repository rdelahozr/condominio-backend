import Condominiumn from "../models/Condominiumn.js";
import Expenses from "../models/Expenses.js";
import Reservation from "../models/Reservation.js";

export const addReservation = async (req, res) => {
  try {
    const expense = Reservation(req.body);
    const newExpense = await expense.save();
    console.log(newExpense);
    res.status(200).send({
      message: `Added expense`,
      reservation: newExpense
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

export const getAllReservations = async (req, res) => {
  try {
    const expensesGet = await Reservation.find();
    console.log(expensesGet);
    res.status(200).send(expensesGet);
  } catch (e) {
    console.error(e)
    res.status(500).send(e);
  }
}

export const getReservationsByCondominium = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id);
    const expensesGet = await Reservation.find({ condominium: id });
    console.log(expensesGet);
    res.status(200).send(expensesGet);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}
