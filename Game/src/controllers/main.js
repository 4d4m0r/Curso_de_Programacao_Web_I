const about = (req,res) =>{
    res.render("main/about");
}
const ui = (req,res) => {
    res.render("main/ui");
}

export default {about,ui}