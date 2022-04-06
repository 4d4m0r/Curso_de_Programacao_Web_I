import express from "express"
import router from "./src/router/router"
import { engine } from "express-handlebars"
import sass from "node-sass-middleware";
const morgan = require("morgan");

const app = express();
const PORT = 7000;

app.engine('handlebars', engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/src/views/layout`,
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views',`${__dirname}/src/views`);

app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css"
}));
app.use("/img", express.static(`${__dirname}/public/css/skier.png`));
app.use("/css", [
    express.static(`${__dirname}/skifree/css`),
    express.static(`${__dirname}/public/css`)
]);
app.use("/webfonts", express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));
app.use("/js", [
    express.static(`${__dirname}/skifree/js`),
    express.static(`${__dirname}/public/js`),
    express.static(`${__dirname}/node_modules/bootstrap/dist/js`)
]);

app.use(express.urlencoded({extended: false}));
app.use(router);
app.use(morgan("combined"));


app.listen(PORT, ()=>{
    console.log(`Escutando na porta ${PORT}`);
})