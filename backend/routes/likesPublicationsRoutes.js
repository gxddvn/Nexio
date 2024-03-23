import Router from "express";
import likesPublicationsController from "../controllers/likesPublicationsController.js";

const router = new Router();

router.post('/', likesPublicationsController.create)
router.get('/', likesPublicationsController.getAll)
router.get('/:id_publication/:id_profile', likesPublicationsController.getOne)
router.delete('/delete/:id_publication/:id_profile', likesPublicationsController.deleteLikePublication)

export default router;