// importar la conexion a la base de datos
import bd from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const Model = bd.define('users', {
    Name: { type: DataTypes.STRING},
    Sex: { type: DataTypes.STRING},
    Age: { type: DataTypes.STRING},
    Height: { type: DataTypes.STRING},
    Weight: { type: DataTypes.STRING}
})

export default Model
