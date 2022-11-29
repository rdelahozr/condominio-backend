import { Router } from "express";
import { addCondominium, deleteCondominium, getAllCondominiums, getCondominiumByRut, updateCondominium } from "../controllers/condominium.js";

const condominiumnRouter = Router();

//Inserta un condominio
condominiumnRouter.post("/condominium/add", addCondominium);

//Obtiene los condominio
condominiumnRouter.get("/condominium/get", getAllCondominiums);

//Obtiene los condominio por rut
condominiumnRouter.get("/condominium/get-by-rut", getCondominiumByRut);

//Update un condominio
condominiumnRouter.put("/condominium/update", updateCondominium);

//Borra uno o varios condominios
condominiumnRouter.post("/condominium/delete", deleteCondominium);

export default condominiumnRouter;
