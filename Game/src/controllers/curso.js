const curso = require("../models/curso");
const models = require("../models/index")
const Curso = models.Curso;
const Area = models.Area; 

async function index(req,res) {
    const cursos = await Curso.findAll();
    res.render("curso/index", {
        cursos: cursos.map(curso => curso.toJSON())
    });
}
async function create(req,res) {
    if(req.route.methods.get){
        res.render("curso/create", {
            csrf: req.csrfToken()
        });
    }else{
        await Curso.create({
            sigla: req.body.sigla,
            nome: req.body.nome,
            areaId: req.body.area,
            descricao: req.body.descricao
        });
        res.redirect("/curso");
    }
}
async function read(req,res) {
    const { id } = req.params;
    try {
        const curso = await Curso.findByPk(id, {include: Area})
        res.render("curso/read", {
            curso: curso.toJSON()
        });
    } catch (error) {
        console.log(error);
    }
}
async function update(req,res) {
    const curso = await Curso.findOne({where: {id: req.params.id}});
    if(req.route.methods.get){
        res.render("curso/update", {
            curso:curso.toJSON(),
            csrf: req.csrfToken()
        });
    }else{
        await Curso.update({
            sigla: req.body.sigla,
            nome: req.body.nome,
            areaId: req.body.area,
            descricao: req.body.descricao
        },{where: {id: req.params.id}});
        res.redirect("/curso/"+req.params.id);
    }
    
}
async function remove(req,res) {
    const { id } = req.params;
    console.log(id);
    try{
        await Curso.destroy( {where: { id: id } });
        res.send("Curso apagado");
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {index,create,read,update,remove}