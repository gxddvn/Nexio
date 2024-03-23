import Router from "express";
import repostsController from "../controllers/repostsController.js";
const router = new Router();

router.post('/', repostsController.create)
router.get('/', repostsController.getAll)
router.get('/profilesall/:id', repostsController.getProfilesAllReposts)
router.get('/:id', repostsController.getOne)

export default router;