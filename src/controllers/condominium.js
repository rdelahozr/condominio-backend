import Condominiumn from "../models/Condominiumn.js";

export const addCondominium = async (req, res) => {
  try {
    const condominiumn = Condominiumn(req.body);
    const newCondominium = await condominiumn.save();
    console.log(newCondominium);
    res.status(200).send({
      message: `Added condominium`,
      rut: newCondominium.rut,
      name: newCondominium.name,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export const updateCondominium = async (req, res) => {
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

export const getAllCondominiums = async (req, res) => {
  try {
    const condominiumnGet = await Condominiumn.find();
    console.log(condominiumnGet);
    res.status(200).send(condominiumnGet);
  } catch (e) {
    console.error(e)
    res.status(500).send(e);
  }
}

export const getCondominiumByRut = async (req, res) => {
  try {
    const { rut } = req.body;
    console.log(rut);
    const condominiumnGet = await Condominiumn.findOne({ rut: rut });
    console.log(condominiumnGet);
    res.status(200).send(condominiumnGet);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
}

export const deleteCondominium = async (req, res) => {
  try {
    const { ids } = req.body;
    console.log(ids);
    const deletedCondominium = await Condominiumn.deleteMany({ _id: { '$in': ids } });
    console.log(deletedCondominium);

    res.status(200).send({
      message: `Deleted condominiums ${ids}`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}