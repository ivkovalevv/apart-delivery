const Router = require('express');
const router = new Router;
const menuItemController = require('../controllers/menuItemController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), menuItemController.create)
router.get('/', menuItemController.getAll)
router.get('/:id', menuItemController.getOne)

module.exports = router;