import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();

router.get('/:id', IndexCtrl.VicaCtrl.findOne1);
router.delete('/:id', IndexCtrl.VicaCtrl.remove);

export default router;