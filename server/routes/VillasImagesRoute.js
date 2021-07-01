import { Router } from "express";
import IndexCtrl from "../controllers/IndexCtrl";

const router = Router();
router.post("/upload", IndexCtrl.ViimCtrl.createFileType);
router.get('/', IndexCtrl.ViimCtrl.findAll);
router.get('/:id', IndexCtrl.ViimCtrl.findOne);
router.delete('/:id', IndexCtrl.ViimCtrl.remove);
router.get('/photo/:filename', IndexCtrl.ViimCtrl.photo, IndexCtrl.ViimCtrl.defaultPhoto)

// router.post('/createphoto/:id', IndexCtrl.VillaCtrl.createVillasImages,
//                                 IndexCtrl.ViimCtrl.create,
//                                 IndexCtrl.VillaCtrl.check);

export default router;
