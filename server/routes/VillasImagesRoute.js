import { Router } from "express";
import IndexCtrl from "../controllers/IndexCtrl";

const router = Router();
router.post("/upload", IndexCtrl.ViimCtrl.createFileType);
router.get('/', IndexCtrl.ViimCtrl.findAll);
router.get('/:id', IndexCtrl.ViimCtrl.findOne);
router.delete('/:id', IndexCtrl.ViimCtrl.remove);

export default router;
