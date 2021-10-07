import {Schema, model, Document} from "mongoose"

// 1. Create an interface representing a document in MongoDB.
export interface User extends Document {
  name: string
  email: string
}

// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
)

// 3. Create a Model.
const UserModel = model<User>("User", UserSchema)

export default UserModel
