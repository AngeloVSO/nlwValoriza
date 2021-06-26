import { Router } from 'express'
import { AuthenticateUserController } from './controllers/authenticateUserContorller'
import { CreateComplimentController } from './controllers/createComplimentController'
import { CreateTagController } from './controllers/createTagController'
import { CreateUserController } from './controllers/createUserController'
import { ListTagController } from './controllers/listTagController'
import { ListUserController } from './controllers/listUserController'
import { ListUserReceiveComlimentsController } from './controllers/listUserReceivedComplimentController'
import { ListUserSendComlimentsController } from './controllers/listUserSendComplimentController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentController = new ListUserSendComlimentsController()
const listUserReceiveComplimentController = new ListUserReceiveComlimentsController()
const listTagController = new ListTagController()
const listUserController = new ListUserController()


router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin , createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle)
router.get("/tags", ensureAuthenticated, listTagController.handle)
router.get("/users", ensureAuthenticated, listUserController.handle)