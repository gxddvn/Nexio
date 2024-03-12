import Router from "express";
import commentsController from "../controllers/commentsController.js";
const router = new Router();

router.post('/', commentsController.create)
router.get('/', commentsController.getAll)
router.get('/:id', commentsController.getOne)

export default router;