import db from "../services/sequalize"
import { DataTypes, Model } from "sequelize"

class discordTicket extends Model {}

discordTicket.init({
    uid:{
        type: DataTypes.STRING,
        unique: true
    },
    discordId:{
        type: DataTypes.STRING
    }
},
{
    timestamps: true,
    sequelize:db, 
    tableName:"discordTicket"
})

discordTicket.sync({ alter: true })
.then(()=>{
    console.log("DiscorTicket table is synced!")
})
.catch((error)=>{
    console.log(`DiscorTicket is not synced!\nReason:${error}`)
})

export default discordTicket