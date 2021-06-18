import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
router.get('/', IndexCtrl.LiteCtrl.findAll);
router.get('/:id', IndexCtrl.LiteCtrl.findOne);
router.post('/cart/:id', IndexCtrl.UserCtrl.checkuser,
    IndexCtrl.VillaCtrl.findOne,
    IndexCtrl.VicaCtrl.findOne,
    IndexCtrl.VicaCtrl.createc,
    IndexCtrl.LiteCtrl.createlite)

export default router;