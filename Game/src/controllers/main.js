const about = (req,res) =>{
    res.render("main/about");
}

const game = (req,res) => {
    res.render("main/game");
}

const ui = (req,res) => {
    res.render("main/ui");
}

export default {about,game,ui}