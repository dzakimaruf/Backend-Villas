import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
router.post('/', IndexCtrl.VillaCtrl.create);
router.get('/', IndexCtrl.VillaCtrl.findAll);
router.get('/:id', IndexCtrl.VillaCtrl.findOne2);
router.put('/:id', IndexCtrl.VillaCtrl.update);
router.delete('/:id', IndexCtrl.VillaCtrl.remove);
router.get('/rawsql/:id', IndexCtrl.VillaCtrl.rawSQL);
router.get('/search/villa', IndexCtrl.VillaCtrl.findAllSearch);
router.get('/search/fasilitas', IndexCtrl.VillaCtrl.searchFacility);

//router.post

// router.get('/photo/:filename', IndexCtrl.VillaCtrl.photo,
// IndexCtrl.VillaCtrl.defaultPhoto);


export default router;