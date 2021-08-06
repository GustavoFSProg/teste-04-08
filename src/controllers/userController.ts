import { Request, Response } from 'express'
import md5 from 'md5'
import UserModel from '../models/userModel'

async function getAll(req: Request, res: Response) {
  try {
    const data = await UserModel.find()

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getById(req: Request, res: Response) {
  try {
    const data = await UserModel.findById(req.params.id, 'name email')

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function update(req: Request, res: Response) {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password),
      },
    })

    return res.status(200).send({ msg: 'User updated' })
  } catch (error) {
    res.status(400).send({ error })
  }
}

async function register(req: Request, res: Response) {
  try {
    await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password),
    })

    return res.status(201).send({ msg: 'User register success!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await UserModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ msg: 'Tudo deletado' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { getAll, update, deleteOne, register, getById }
