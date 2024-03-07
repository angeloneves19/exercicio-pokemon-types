import { getPokemonsWeakness } from "./service";
import Express from "express"
const app = Express();
const port = process.env.PORT || 8080;

app.use(Express.json())

app.get('/:name', (req:any, res:any) => {
    res.send(getPokemonsWeakness(req.params.name));
     })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
