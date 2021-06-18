import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
router.get('/', IndexCtrl.UserCtrl.requireSignin,IndexCtrl.UserCtrl.findAll);
router.post('/signup', IndexCtrl.UserCtrl.signup);
router.post('/signup1', IndexCtrl.UserCtrl.signup1);
router.post('/signin', IndexCtrl.UserCtrl.signin);
router.get('/signout', IndexCtrl.UserCtrl.signout);
router.put('/update/:id', IndexCtrl.UserCtrl.update);

export default router;