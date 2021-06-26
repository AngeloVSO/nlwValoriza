import { Router } from 'express'
import { AuthenticateUserController } from './controllers/authenticateUserContorller'
import { CreateComplimentController } from './controllers/createComplimentController'
import { CreateTagController } from './controllers/createTagController'
import { CreateUserController } from './controllers/createUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController
const createComplimentController = new CreateComplimentController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin , createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)