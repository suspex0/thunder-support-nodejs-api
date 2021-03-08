import express from "express"
import cookieParser from "cookie-parser"
import logger from "morgan"
import routes from "./routes"
import bodyParser from "body-parser"

let app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", routes)

export default app