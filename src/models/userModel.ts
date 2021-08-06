import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default model('UserModel', schema)
