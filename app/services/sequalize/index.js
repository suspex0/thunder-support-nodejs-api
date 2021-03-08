import {Sequelize} from "sequelize"
import {Database} from "../../../config.json"

// const seq = new Sequelize(`mysql://${Database.User?Database.User:""}:${Database.Password?Database.Password:""}@${Database.Host}:${Database.Port}/${Database.Name}`)

const seq = new Sequelize(Database.Name, Database.User, Database.Password, {
    host: Database.Host,
    dialect: "mysql"
} )

seq.authenticate()
.then(()=>{
    console.log(`Database connected to ${Database.Host}:${Database.Port}/${Database.Name}`)
})
.catch((error)=>{
    console.log(`Database can not connected to ${Database.Host}:${Database.Port}/${Database.Name}\nReason: ${error}`)
})

export default seq