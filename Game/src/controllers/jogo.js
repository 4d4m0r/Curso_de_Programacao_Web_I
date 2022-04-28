import { Partida,Usuario } from "../models/index";
import { Op } from "sequelize";

const index = (req,res) =>{
    res.render("jogo/index");
}

async function save(req,res){
    const { id } = req.session.uid;
    const { pontuacao } = req.params;
    console.log(req.session.uid)
    console.log(req.params)
    await Partida.create({
        usuarioId: req.session.uid,
        pontuacao: req.params.id
    });
    res.redirect("/ranking");
    console.log(req.session.uid)
    console.log(req.params)
}

const ranking = async (req,res) => {
    const partidas = await Partida.findAll({
        order: [
            ['pontuacao','DESC']
        ]
    });
    res.render("jogo/ranking",{
        partidas: partidas.map((partida)=> partida.toJSON())
    });
}

export default {index,ranking,save}