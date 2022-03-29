import express from "express"
import router from "./router/router";
const morgan = require("morgan");

const app = express()
const PORT = 4000;


app.use(morgan("common"));
app.use(router);

app.listen(PORT);