import Router from "express";
import messagesController from '../controllers/messagesController.js';
const router = new Router();

router.post('/', messagesController.create)
router.get('/', messagesController.getAll)
router.get('/:id', messagesController.getOne)

export default router;