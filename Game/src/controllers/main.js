import { Curso,Usuario } from "../models/index"
import bcrypt from "bcryptjs"

const about = (req,res) =>{
    res.render("main/about");
}
const ui = (req,res) => {
    res.render("main/ui");
}

const game = (req,res) => {
    res.render("main/game");
}

const signup = async (req,res) => {
    const cursos = await Curso.findAll();
    if(req.route.methods.get){
        res.render("main/signup",{
            cursos:cursos.map(c => c.toJSON()),
            csrf: req.csrfToken()
        });
    }else{
        const usuario = req.body;
        try{
            bcrypt.genSalt(10, (errorSalt,salt) => {
                bcrypt.hash(usuario.senha,salt,async (error,hash) =>{
                    await Usuario.create({
                        nome: usuario.nome,
                        email:usuario.email,
                        senha:hash,
                        cursoId: usuario.cursoId
                    });
                    res.redirect("/ui");
                })
            })
            //await Usuario.create(usuario);
        }catch(error){}
    }
    
}
export default {about,ui,game,signup}