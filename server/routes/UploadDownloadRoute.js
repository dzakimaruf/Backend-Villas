import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
// router.post('/profile/:id', IndexCtrl.UploadDownloadCtrl, IndexCtrl.villasCtrl.update);
router.post('/file', IndexCtrl.UploadCtrl.uploadMultipart,
    IndexCtrl.ViimCtrl.create, IndexCtrl.ViimCtrl.findAll);
router.get('/', IndexCtrl.ViimCtrl.findAll);
router.get('/:filename', IndexCtrl.UploadCtrl.download);

export default router;