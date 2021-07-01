import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
router.get('/', IndexCtrl.LiteCtrl.findAll);
router.get('/:id', IndexCtrl.LiteCtrl.findOne);
router.post('/cart/:id',
    IndexCtrl.UserCtrl.checkuser,
    IndexCtrl.VillaCtrl.findOne,
    IndexCtrl.VicaCtrl.findOne,
    IndexCtrl.VicaCtrl.createc,
    IndexCtrl.LiteCtrl.createlite);
router.post('/order',
    IndexCtrl.VicaCtrl.checkCart,
    IndexCtrl.VillaCtrl.findOne1,
    IndexCtrl.OrderCtrl.create,
    IndexCtrl.VicaCtrl.update1,
    IndexCtrl.LiteCtrl.update1)
router.get('/order/:id', IndexCtrl.OrderCtrl.findOne)
router.get('/findone/order/:id', IndexCtrl.OrderCtrl.findAll)
router.put('/order/update/:id', IndexCtrl.OrderCtrl.update)
router.put('/ordered/:id',
    IndexCtrl.UserCtrl.checkuser,
    IndexCtrl.OrderCtrl.cekord,
    IndexCtrl.VicaCtrl.check,
    IndexCtrl.OrderCtrl.updateOrd,
    IndexCtrl.LiteCtrl.checkpay);
router.delete('/order/:id', IndexCtrl.OrderCtrl.remove)



export default router;