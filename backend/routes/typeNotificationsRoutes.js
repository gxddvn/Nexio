import Router from "express";
import TypeNotificationsController from "../controllers/TypeNotificationsController.js";
const router = new Router();

router.post('/', TypeNotificationsController.create)
router.get('/', TypeNotificationsController.getAll)
router.get('/:id', TypeNotificationsController.getOne)

export default router;