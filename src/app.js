import express from "express";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";
const bodyParser = require('body-parser');



//Rutas
import productosRutas from "./routes/productos.rutas";
import loginRutas from "./routes/login.rutas";
import categoriasRutas from "./routes/categorias.rutas";


const app = express();

app.use(bodyParser.json());
app.use(function(req,res,next){
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-Whit, Content-Type, Accept");
    next();
})
app.use(cors());
app.set("port", 3001);
app.use(morgan("dev"));
app.use(express.json());
/* app.use(multer({dest:path.join(__dirname,"./imgs/uploads")}).single("image")) */
app.use(productosRutas);
app.use(loginRutas);
app.use(categoriasRutas);

export default app;