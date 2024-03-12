import Router from "express";
import publicationsController from "../controllers/publicationsController.js";
const router = new Router();

router.post('/', publicationsController.create)
router.get('/', publicationsController.getAll)
router.get('/:id', publicationsController.getOne)

export default router;