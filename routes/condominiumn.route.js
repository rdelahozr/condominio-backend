import { Router } from "express";
import Condominiumn from "../models/Condominiumn";

const condominiumnRouter = Router();


//Inserta un condominio
condominiumnRouter.post("/condominiumn/add", async (req, res) => {
  const condominiumn = Condominiumn(req.body);
  const condominiumnSave = await condominiumn.save();
  console.log(condominiumnSave);

  res.send("add condominiumn");
});

//Obtiene los condominio
condominiumnRouter.get("/condominiumn/get", async (req, res) => {
  const condominiumnGet = await Condominiumn.find();
  console.log(condominiumnGet);
  res.send(condominiumnGet);
});

//Obtiene los condominio por rut
condominiumnRouter.get("/condominiumn/get-by-rut", async (req, res) => {
  const { rut } = req.body;
  console.log(rut);
  const condominiumnGet = await Condominiumn.findOne({ rut: rut });
  console.log(condominiumnGet);
  res.send(condominiumnGet);
});

//Elimina un condominio
condominiumnRouter.post("/condominiumn/delete", async (req, res) => {
  const { rut } = req.body;
  console.log(rut);
  const condominiumnSave = await Condominiumn.deleteOne({ rut: rut });
  console.log(condominiumnSave);

  res.send("add condominiumn");
});


export default condominiumnRouter;
