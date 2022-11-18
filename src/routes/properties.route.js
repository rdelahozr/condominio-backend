import { Router } from "express";
import Condominiumn from "../models/Condominiumn";
import Properties from "../models/Properties";

const propertiesRouter = Router();

//Inserta un propiedad
propertiesRouter.post("/properties/add", async (req, res) => {
  const properties = Properties(req.body);
 
 const propertiesSave = await Properties.create(properties);
 console.log(propertiesSave);

  res.send("add properties");
});

//Obtiene los propiedad
propertiesRouter.get("/properties/get", async (req, res) => {
  const properties = await Properties.find().populate("condominiumn");
  console.log(properties);
  res.send(properties);
});

//Obtiene una propiedad por condominio
propertiesRouter.get("/properties/get-by-condominiumn", async (req, res) => {
  const { condominiumId } = req.body;
  console.log(condominiumId);
  const properties = await Properties.findOne({ condominiumn: condominiumId }).populate("condominiumn");
  console.log(properties);
  res.send(properties);
});

//Elimina una propiedad
propertiesRouter.post("/properties/delete", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const properties = await Properties.deleteOne({ id: id });
  console.log(properties);

  res.send("elimina properties");
});

export default propertiesRouter;
