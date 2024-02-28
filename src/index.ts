import { getPokemonsWeakness } from "./service";
// const express = require('express');
import Express from "express"

const app = Express();
const port = process.env.PORT || 8080;


app.use(Express.json())

app.get('/', (req:any, res:any) => {
    res.send(getPokemonsWeakness(req.body.name));
     })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
