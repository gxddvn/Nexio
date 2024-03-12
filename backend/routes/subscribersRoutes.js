import Router from "express";
import subscribersController from "../controllers/subscribersController.js";
const router = new Router();

router.post('/', subscribersController.create)
router.get('/', subscribersController.getAll)
router.get('/:id', subscribersController.getOne)

export default router;