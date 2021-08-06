import Router from 'express'
import userController from './controllers/userController'

const routes = Router()

routes.get('/', userController.getAll)
routes.get('/:id', userController.getById)
routes.post('/register', userController.register)
routes.get('/:id', userController.getById)
routes.put('/update/:id', userController.update)
routes.delete('/delete/:id', userController.deleteOne)

export default routes
