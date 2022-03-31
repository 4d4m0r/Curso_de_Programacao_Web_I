const about = (req,res) =>{
    res.render("main/about");
}

const game = (req,res) => {
    res.render("main/game");
}

export default {about,game}