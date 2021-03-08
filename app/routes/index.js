import {Router} from "express"
import test from "./testRoute"
import systemInfo from "./systemInfo"

let router = Router()

router.use("/", test)
router.use("/system_info", systemInfo)

export default router