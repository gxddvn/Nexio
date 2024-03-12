import Router from "express";
import notificationsController from '../controllers/notificationsController.js';
const router = new Router();

router.post('/', notificationsController.create)
router.get('/',  notificationsController.getAll)
router.get('/:id',  notificationsController.getOne)

export default router;