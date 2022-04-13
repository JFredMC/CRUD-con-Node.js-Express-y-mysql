import {Sequelize} from 'sequelize';

const bd = new Sequelize('bd_node', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default bd