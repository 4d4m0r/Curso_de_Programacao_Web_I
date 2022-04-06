function logs(tipo) {
    if(tipo === "simples"){
        return (req,res,next) => {
            console.log("log simples");
            next();
        }
    }else if(tipo === "completo"){
        return (req,res,next) => {
            console.log("log completo");
            next();
        }
    }
}

export default logs;