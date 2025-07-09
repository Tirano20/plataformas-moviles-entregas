import express from "express"

const servidor = express();

servidor.get("/ofrece", (req, res) =>{
    res.json({
        mensaje: "Esta es la ruta GET de mi entidad Ofrece",
        text: "HOLA mundo"
    });
});

servidor.post("/ofrece", (req, res) =>{
    res.json({
        mensaje: "Esta es la ruta POST de mi entidad Ofrece",
        text: "HOLA mundo"
    });
});

servidor.put("/ofrece", (req, res) =>{
    res.json({
        mensaje: "Esta es la ruta PUT de mi entidad Ofrece",
        text: "HOLA mundo"
    });
});

servidor.delete("/ofrece", (req, res) =>{
    res.json({
        mensaje: "Esta es la ruta DELETE de mi entidad Ofrece",
        text: "HOLA mundo"
    });
});

servidor.listen(3000, () =>{
    console.log("EN EL PUERTO 3000");
});

servidor.get("/proyecto", (req, res) =>{
    res.json({
        mensaje: "Bienvenido a la API de Anima Tu Fiesta",
        text: "HOLA mundo"
    });
});