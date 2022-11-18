import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hola Mundo");
});

router.get("/about", (req, res) => {
    res.send("Hola about");
  });

export default router;
