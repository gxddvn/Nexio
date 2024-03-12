import Router from "express";
import storiesController from "../controllers/storiesController.js";
const router = new Router();

router.post('/', storiesController.create)
router.get('/', storiesController.getAll)
router.get('/:id', storiesController.getOne)

export default router;