import { Router } from "express";
import CommonPlaces from "../models/CommonPlaces.js";

const commonPlacesRouter = Router();

//Inserta un propiedad
commonPlacesRouter.post("/common-places/add", async (req, res) => {
  try {
    const properties = CommonPlaces(req.body);

    const propertiesSave = await CommonPlaces.create(properties);
    console.log(propertiesSave);

    res.status(200).send({
      message: 'Property Added',
      place: propertiesSave
    });
  } catch (e) {
    console.log(e);
    res.status(500).send('Algo malo pasó, intente nuevamente');
  }

});


//Obtiene las propiedades de un condominio
commonPlacesRouter.get("/common-places/get-by-condominium", async (req, res) => {
  try {
    const { condominiumId } = req.query;
    const propertiesByCondominium = await CommonPlaces.find({ condominium: condominiumId });
    res.status(200).send(propertiesByCondominium);
  } catch (e) {
    console.log(e);
    res.status(500).send('Algo malo pasó, intente nuevamente');
  }
});



export default commonPlacesRouter;
