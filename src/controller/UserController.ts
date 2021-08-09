import UserModel from "../models/user"
import {NextFunction, Request, Response} from "express"
import {ResponseFormat} from "../utils/ResponseFormat"

export class UserController {
  public async list(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      console.log("***", req.ip)
      console.log(req.ips)
      console.log(req.socket.remoteAddress)
      const user = await UserModel.find()
      return new ResponseFormat(res).success(user)
    } catch (err) {
      next(err)
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      // TODO add body validation with yup, ... or middleware
      let user = await this.getUserBy({
        name: req.body.name,
        email: req.body.email,
      })
      if (!user) {
        user = await UserModel.create(req.body)
      }

      return new ResponseFormat(res).success(user)
    } catch (err) {
      next(err)
    }
  }

  private async getUserBy(params: any): Promise<any> {
    return await UserModel.findOne(params)
  }
}
