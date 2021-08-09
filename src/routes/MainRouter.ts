import {Router} from "express"
import {UserRouter} from "./UserRouter"
import {UserRecordRouter} from "./UserRecordRouter"

export class MainRouter {
  public readonly router: Router
  constructor() {
    this.router = Router()
    this.router.use("/users", new UserRouter().router)
    this.router.use("/user-records", new UserRecordRouter().router)
  }
}
