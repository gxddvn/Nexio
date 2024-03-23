import Router from "express";
import publicationsController from "../controllers/publicationsController.js";
import multer from "multer";
const router = new Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.any(), publicationsController.create)
router.get('/', publicationsController.getAll)
router.get('/profilesall/:id', publicationsController.getProfilesAllPublication)
router.get('/:id', publicationsController.getOne)
// router.post('/test', publicationsController.getTest)
router.delete('/del/:id', publicationsController.deletePublication)
router.put('/update/likes', publicationsController.updateLikesPublication)
router.get('/checkactions/:id_publication/:id_profile', publicationsController.checkActions)

export default router;