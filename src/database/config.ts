import ENV from "../Helper/Env"

export const mongoDBConfig = {
  uri: ENV.MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
}
