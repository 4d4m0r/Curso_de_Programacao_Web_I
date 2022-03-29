const index = (req,res) => {
    res.render("main/index", {layout : false});
}

const about = (req,res) => {
    res.render("main/about", {layout : false});
}

const profs = (req,res) => {
    const professores = [
        {nome: "Adamor"},
        {nome: "Marcelo"}
    ];
    res.render("main/profs",{professores,layout: false});
}
export default {index,about,profs}