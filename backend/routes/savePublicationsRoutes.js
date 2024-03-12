import Router from "express";
import savePublicationsController from '../controllers/savePublicationsController.js';
const router = new Router();

router.post('/', savePublicationsController.create)
router.get('/', savePublicationsController.getAll)
router.get('/:id', savePublicationsController.getOne)

export default router;