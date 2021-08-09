import express, {Response, Request, NextFunction} from "express"
import cors from "cors"
import logger from "morgan"
import compression from "compression"
import ENV from "./Helper/Env"
import errorHandlerMiddleware from "./middlewares/error-handler"
import {AppError} from "./error/AppError"
import {HttpStatusCode} from "./common/HttpStatusCode"
import {MainRouter} from "./routes/MainRouter"
import mongodb from "./database/mongodb"

const app = express()
app.disable("x-powered-by")
app.set("port", ENV.PORT)
app.set("trust proxy", true)

mongodb
app
  .use(cors())
  .use(logger("dev"))
  .use(compression())
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use("/", new MainRouter().router)
  .use(middleware404)
  .use(errorHandlerMiddleware)

function middleware404(_req: Request, _res: Response, next: NextFunction) {
  const err = new AppError(
    HttpStatusCode.NOT_FOUND,
    "Not Found!",
    "route_not_exist",
  )
  next(err)
}

export default app
