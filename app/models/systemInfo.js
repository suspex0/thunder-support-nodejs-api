import db from "../services/sequalize"
import { DataTypes, Model } from "sequelize"

class systemInfo extends Model {}

systemInfo.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    windowsVersion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    redistInstalled:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    appsInstalled:{
        type: DataTypes.STRING,
        allowNull: true
    },
    appsRunning:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    servicesRunning:{
        type: DataTypes.STRING,
        allowNull: true
    },
    depEnabled:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    defenderEnabled:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
{
    timestamps: true,
    sequelize:db, 
    tableName:"system-info"
})

systemInfo.sync({ alter: true })
.then(()=>{
    console.log("System-info table is synced!")
})
.catch((error)=>{
    console.log(`System-info is not synced!\nReason:${error}`)
})

export default systemInfo