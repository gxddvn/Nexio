import Router from "express";
import chatRoomsController from "../controllers/chatRoomsController.js";
const router = new Router();

router.post('/', chatRoomsController.create)
router.get('/', chatRoomsController.getAll)
router.get('/:id', chatRoomsController.getOne)

export default router;