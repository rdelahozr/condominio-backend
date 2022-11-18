import { Router } from "express";
import User from "../models/Users";

const loginRouter = Router();

loginRouter.post("/login/add", async (req, res) => {
  const user = User(req.body);
  const userSave = await user.save();
  console.log(userSave);

  res.send("add user");
});

//Obtiene los usuarios
loginRouter.get("/login/get", async (req, res) => {
  const userGet = await User.find();
  console.log(userGet);
  res.send(userGet);
});

//Valida user y pass
loginRouter.post("/login/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  var message = "";
  var code = "";

  try {

    const user = await User.findOne({ email: email });

    if (user === null) {
      (code = "01"), (message = "Usuario no existe 1");
      console.log(message);
    } else {
      if (user.password === password) {
        (code = "00"), (message = "Usuario autorizado");
        console.log(message);
      } else {
        (code = "02"), (message = "Contraseña Incorrecta");
        console.log(message);
      }
    }
    
    res.status(200).json({ code, message, user });

  } catch (error) {
    console.error(error);
  }

});



export default loginRouter;
