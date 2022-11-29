import { Router } from "express";
import User from "../models/Users.js";

const loginRouter = Router();

loginRouter.post("/users/add", async (req, res) => {
  try {
    const user = User(req.body);
    const userSave = await user.save();
    res.status(200).send({
      message: 'User added successfully',
      user: userSave
    });
  } catch (e) {
    console.error(e);

  }
});

//Obtiene los usuarios
loginRouter.get("/users/get", async (req, res) => {
  try {
    const { condominium } = req.query;
    if (!condominium) {
      return res.status(400).send('Se requiere el id de un condominio');
    }
    const users = await User.find({
      condominium
    });
    console.log({ users });
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    res.status(500).send('Algo malo pasó, intente nuevamente');
  }
});

//Valida user y pass
loginRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user === null) {
      return res.status(404).json({
        message: 'Usuario no existe',
        user
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: 'Usuario o password incorrecto',
        user
      })
    }
    res.status(200).json(user);

  } catch (error) {
    res.status(500).send({
      message: 'Algo ocurrió'
    })
  }

});



export default loginRouter;
