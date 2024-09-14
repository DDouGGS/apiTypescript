import {Router,Request,Response} from 'express'
import {User} from '../models/user'
import { userController } from '../controllers/userController'

const user : User[] = []
const router = Router()

router.get(
  '/',
  (req: Request, res: Response) => {
    res.json({success: true})
  }
)
router.get(
  '/user',
  (req: Request, res: Response) => {
    res.json(user)
  }
)
router.post(
  '/user',
  (req: Request, res: Response) => {
    const newUser : userController = new userController();

    res.status(201).json(newUser.add(req, res))
  }
)

export default router
