import { Router } from 'express'
import { getAuthUrl, getToken } from '../controller/auth.controller.js'

const router = Router()

router.get('/', getAuthUrl)
router.get('/callback', getToken)

export default router;