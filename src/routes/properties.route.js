import { Router } from "express";
import Properties from "../models/Properties.js";

const propertiesRouter = Router();

//Inserta un propiedad
propertiesRouter.post("/properties/add", async (req, res) => {
  try {
    const properties = Properties(req.body);

    const propertiesSave = await Properties.create(properties);
    console.log(propertiesSave);

    res.status(200).send({
      message: 'Property Added',
      property: propertiesSave
    });
  } catch (e) {
    console.log(e);
    res.status(500).send('Algo malo pasó, intente nuevamente');
  }

});

//Obtiene los propiedad
propertiesRouter.get("/properties/get", async (req, res) => {
  try {
    const properties = await Properties.find();
    console.log(properties);
    res.status(200).send(properties);
  } catch (e) {
    console.log(e);
    res.status(500).send('Algo malo pasó, intente nuevamente');
  }
});

//Obtiene las propiedades de un condominio
propertiesRouter.get("/properties/get-by-condominium", async (req, res) => {
  try {
    const { condominiumId } = req.query;
    const propertiesByCondominium = await Properties.find({ condominiumn: condominiumId });
    res.status(200).send(propertiesByCondominium);
  } catch (e) {
    console.log(e);
    res.status(500).send('Algo malo pasó, intente nuevamente');
  }
});

//Elimina una propiedad
propertiesRouter.post("/properties/delete", async (req, res) => {
  try {
    const { ids } = req.body;
    console.log(ids);
    const properties = await Properties.deleteMany({ _id: { '$in': ids } });
    console.log(properties);

    res.status(200).send({
      message: `Properties deleted ${ids}`
    });
  } catch (e) {
    console.log(e);
    res.status(500).send('Algo malo pasó, intente nuevamente');
  }

});

export default propertiesRouter;
