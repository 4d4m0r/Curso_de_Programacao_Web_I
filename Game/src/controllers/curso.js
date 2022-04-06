const models = require("../models/index")
const Curso = models.Curso;

async function index(req,res){
    const cursos = await Curso.findAll();
    res.render("curso/index", {
        cursos:cursos.map(cursp => cursp.toJSON())
    })
}
async function create(req,res){
    if(req.route.methods.get){
        res.render("curso/create");
    }else{
        await Curso.create({
            nome: req.body.nome,
            areaId: req.body.area
        });
        res.redirect("/ui");
    }
    
}
async function read(req,res){

}
async function update(req,res){

}
async function remove(req,res){

}

module.exports = {index,create,read,update,remove}