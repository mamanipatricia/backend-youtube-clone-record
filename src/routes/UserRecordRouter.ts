import {Router} from "express"
import {UserRecordController} from "../controller/UserRecordController"

export class UserRecordRouter {
  public readonly router: Router
  public controller: UserRecordController
  constructor() {
    this.controller = new UserRecordController()
    this.router = Router()
    this.router.post("/create", this.controller.create)
  }
}
