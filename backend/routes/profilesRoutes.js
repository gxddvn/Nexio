import Router from "express";
const router = new Router();
import profilesController from "../controllers/profilesController.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";

router.post('/registration', profilesController.registration)
router.post('/login', profilesController.login)
router.get('/auth', AuthMiddleware, profilesController.checkAuth)
router.get('/:id', profilesController.getOne)
router.get('/', profilesController.getAll)

export default router;