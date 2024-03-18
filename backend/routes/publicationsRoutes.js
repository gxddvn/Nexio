import Router from "express";
import publicationsController from "../controllers/publicationsController.js";
import multer from "multer";
const router = new Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.any(), publicationsController.create)
router.get('/', publicationsController.getAll)
router.get('/:id', publicationsController.getOne)
router.post('/test', publicationsController.getTest)

export default router;