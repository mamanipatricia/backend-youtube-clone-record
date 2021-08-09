import {Response} from "express"
import {HttpStatusCode} from "../common/HttpStatusCode"

export class ResponseFormat {
  private res: Response

  constructor(res: Response) {
    this.res = res
  }

  success = <T>(
    data?: T,
    statusCode: HttpStatusCode = HttpStatusCode.OK,
  ): Response => {
    return this.res.status(statusCode).json({
      success: true,
      data: data,
    })
  }
}
