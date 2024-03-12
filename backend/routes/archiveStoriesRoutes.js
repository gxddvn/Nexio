import Router from "express";
import archiveStoriesController from "../controllers/archiveStoriesController.js";
const router = new Router();

router.post('/', archiveStoriesController.create)
router.get('/', archiveStoriesController.getAll)
router.get('/:id', archiveStoriesController.getOne)

export default router;