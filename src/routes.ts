import { Router } from 'express'
import { CreateTagController } from './controllers/createTagController'
import { CreateUserController } from './controllers/createUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin , createTagController.handle)