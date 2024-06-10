const express = require('express');

const cors = require('cors')

require('dotenv').config() 

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.use("/api/v1",require("./routers/id_router"))


app.use((req, res) => {
    res.status(404).json({
        error:true,
        msg:"404 Pagina no encontrada"
    })
})

app.listen(port, () => {
    console.log(`Conectado desde el puerto ${port}`)
})