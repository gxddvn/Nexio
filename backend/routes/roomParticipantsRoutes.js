import Router from "express";
import RoomParticipantsController from '../controllers/roomParticipantsController.js';
const router = new Router();

router.post('/', RoomParticipantsController.create)
router.get('/', RoomParticipantsController.getAll)
router.get('/:id', RoomParticipantsController.getOne)

export default router;