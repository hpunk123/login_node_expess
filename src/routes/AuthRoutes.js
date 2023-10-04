import { Router } from 'express'
import { home,signin,signup,userValidator,createUser,profile,logout } from '../controllers/AuthController.js'
import { isLoggedIn,isNotLoggedIn } from '../middlewares/verifySession.js'


const router = Router()

router.get( '/home',home )
router.get( '/signin',signin )
router.get( '/signup',signup )
router.post( '/userValidator',userValidator )
router.post( '/createUser',createUser )
router.get( '/profile',isLoggedIn,profile )
router.get( '/logout',logout)


export default router