import UserRecordModel from "../models/userRecord"
import {NextFunction, Request, Response} from "express"
import {ResponseFormat} from "../utils/ResponseFormat"

export class UserRecordController {
  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const payload = {
        ip: req.ip,
        userData: req.headers["user-agent"],
        userId: req.body.userId,
        action: req.body.action,
        requestTo: req.body.requestTo,
      }
      const userRecord = await UserRecordModel.create(payload)
      console.log(`<userRecord>`, userRecord)
      console.log(`<BODY>`, req.body)
      return new ResponseFormat(res).success()
    } catch (err) {
      next(err)
    }
  }
}
