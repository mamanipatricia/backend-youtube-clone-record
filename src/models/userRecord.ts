import {Schema, model} from "mongoose"

// 1. Create an interface representing a document in MongoDB.
interface UserRecord {
  action: string
  requestTo: string
  ip: string
  userData: string
}

// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<UserRecord>(
  {
    action: {
      type: String,
    },
    requestTo: {
      type: String,
    },
    ip: {
      type: String,
      required: true,
    },
    userData: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
)

// 3. Create a Model.
const UserRecordModel = model<UserRecord>("UserRecord", UserSchema)

export default UserRecordModel
