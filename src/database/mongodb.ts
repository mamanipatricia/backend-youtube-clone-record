import mongoose from "mongoose"
import {mongoDBConfig} from "./config"

class MongoDB {
  constructor() {
    this.connect()
  }
  connect(): void {
    const mongoDBUri = mongoDBConfig.uri
    const options = mongoDBConfig.options
    mongoose
      .connect(mongoDBUri, options)
      .then(() => {
        console.log("MongoDB connected")
      })
      .catch((err) => {
        console.log("MongoDB connection error: ", err)
      })
  }
  // todo check in models this function
  getMongoose(): any {
    return mongoose
  }
}

export default new MongoDB()
