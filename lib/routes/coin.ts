import express, { Request, Response } from "express";
var getRawBody = require("raw-body");

import * as coinController from "../controller/coinController";
import { CreateCoin } from "../models/coin";

const router = express.Router();


router.put("/coin/createCoin", (req, res, next) => {
  const { id } = req.query;
  const { name, code, price } = req.body;

  return coinController
    .createCoin(id, name, code, price)
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});

router.get("/coin/:coinCode", (req, res, next) => {
  return coinController
    .getCoinByCode(req.query.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});


export { router as coinRouter };