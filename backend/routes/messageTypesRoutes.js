import Router from "express";
import messageTypesController from '../controllers/messageTypesController.js';
const router = new Router();

router.post('/', messageTypesController.create)
router.get('/', messageTypesController.getAll)
router.get('/:id', messageTypesController.getOne)

export default router;