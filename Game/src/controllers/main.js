const about = (req,res) =>{
    res.render("main/about");
}
const ui = (req,res) => {
    res.render("main/ui");
}

const game = (req,res) => {
    res.render("main/game");
}
export default {about,ui,game}