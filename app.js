import express from "express";
import cors from 'cors'
//importando la base de datos
import bd from "./database/db.js";
import userRoutes from "./routes/routes.js"
const app = express()
const port = 8000;

app.use( cors() )
app.use(express.json())
app.use('/users', userRoutes)

try {
    await bd.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log('Error en la conexion a la DB:' + error)
}

// app.get('/', (request, response) => {
//     response.send('Hola Mundo')
// })

app.listen(port, () => {
    console.log(`Servidor listo en el puerto ${port}`)
})