const router = require('express').Router();
const productController = require('../controllers/productController');

router.post('/addProduct' , productController.addProduct);
router.get('/getAllProducts' , productController.getAllProducts);
router.get('/getOneProduct/:id' , productController.getOneProduct);
router.get('/getAvailableProducts' , productController.getAvailableProducts);
router.put('/updateProduct/:id' , productController.updateProduct);
router.delete('/deleteProduct/:id' , productController.deleteProduct);

module.exports = router;