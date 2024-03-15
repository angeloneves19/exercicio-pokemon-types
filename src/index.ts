import Express from "express";
import { pokemonRouter } from "./routes";
const app = Express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());

app.use(Express.json());
app.use(pokemonRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
