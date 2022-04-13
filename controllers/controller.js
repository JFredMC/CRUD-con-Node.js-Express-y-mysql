//Importamos el modelo
import Model from "../models/model.js";

//* Metodos psra el CRUD *//

//Mostrar todos los registros
export const getUsers = async (request, response) => {
    const users = await Model.findAll()
    response.status(200).json(users)
}

//Mostrar un registro
export const getUser = async (request, response) => {
    const user = await Model.findAll({
        where:{
            id:request.params.id
        }
    })
    response.status(200).json(user)
}
//Crear un registro
export const createUser = async (request, response) => {
    await Model.create(request.body)
    response.status(200).json({"message": "¡Registro creado exitosamente!"})
}
//Actualizar un registro
export const updateUser = async (request, response) => {
    await Model.update(request.body,{
        where: { id: request.params.id}
    })
    response.status(200).json({"message": "¡Registro actualizado exitosamente!"})
}

//Eliminar un registro
export const deleteUser = async (request, response) => {
    await Model.destroy({
       where: {id: request.params.id}
    })
    response.status(200).json({"message": "¡Registro eliminado exitosamente!"})
}