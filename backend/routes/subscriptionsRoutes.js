import Router from "express";
import subscriptionsController from "../controllers/subscriptionsController.js";
const router = new Router();

router.post('/', subscriptionsController.create)
router.get('/', subscriptionsController.getAll)
router.get('/:id', subscriptionsController.getOne)

export default router;