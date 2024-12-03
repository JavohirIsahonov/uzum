const { Router } = require('express');
const router = Router();
const {
  getAllCarts,
  getCartById,
  createNewCart,
  deletebyid,
  updatebyid,
} = require('../controllers/cart.controller');
const upload = require('../utils/upload')


router.get('/all', getAllCarts);
router.get('/:id', getCartById);
router.post('/create', upload.single('image'),  createNewCart);
router.delete('/:id', deletebyid);
router.put('/:id', updatebyid);

module.exports = router;
