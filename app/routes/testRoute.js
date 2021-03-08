import {Router} from "express"

let router = Router()

router.get("/test",  (req, res)=>{
    res.status(500).json({
        message : "Hello World!"
    })
})

export default router