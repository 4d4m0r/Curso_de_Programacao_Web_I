import { Partida } from "../models/index";
import { Op } from "sequelize";

const index = (req,res) =>{
    res.render("jogo/index");
}

const save = (req,res) => {
    res.render("jogo/save");
}

const ranking = async (req,res) => {
    const partidas = await Partida.findAll();
    res.render("jogo/ranking",{
        partidas: partidas.map((partida)=> partida.toJSON())
    });
}

export default {index,ranking,save}