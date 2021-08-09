import {Router} from "express"
import {UserController} from "../controller/UserController"

export class UserRouter {
  public readonly router: Router
  public controller: UserController
  constructor() {
    this.controller = new UserController()
    this.router = Router()
    this.router
      .post("/create", this.controller.create.bind(this.controller))
      .get("/list", this.controller.list.bind(this.controller))
  }
}
