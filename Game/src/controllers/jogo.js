const index = (req,res) =>{
    res.render("jogo/index");
}

const ranking = (req,res) => {
    res.render("jogo/ranking");
}

const save = (req,res) => {
    res.render("jogo/save");
}

export default {index,ranking,save}