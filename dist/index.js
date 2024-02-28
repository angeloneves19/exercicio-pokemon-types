"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
// const express = require('express');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send((0, service_1.getPokemonsWeakness)(req.body.name));
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
