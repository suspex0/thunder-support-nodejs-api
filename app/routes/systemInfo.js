import {Router} from "express"
import discordTicket from "./../models/discordTicket"
import systemInfo  from "./../models/systemInfo"

let router = Router()

router.post("/", (req, res, next)=>{
    if(!req.body.uid){
        return res.status(401).json({message: "Uid is not provided!"})
    }

    discordTicket.findOne({where:{uid:req.body.uid}})
    .then(data=>{
        if(data){
            next()
        }
        else{
            return res.status(400).json({message:"Ticket UID not found!"})
        }
    })
    .catch(err=>{
        return res.status(500).json({message:err})
    })
}, (req, res)=>{
    systemInfo.create({
        windowsVersion: req.body.windowsVersion,
        redistInstalled: req.body.redistInstalled,
        appsInstalled: req.body.appsInstalled,
        appsRunning: req.body.appsRunning,
        servicesRunning: req.body.servicesRunning,
        depEnabled: req.body.depEnabled,
        defenderEnabled: req.body.defenderEnabled
    })
    .then((data)=>{
        res.status(200).json({message:"Success!", data: data})
    })
    .catch(err=>{
        return res.status(500).json({message:err})
    })
})

export default router