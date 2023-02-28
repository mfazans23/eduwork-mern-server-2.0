const router = require('express').Router()

const { protect, admin } = require('../../middleware/authMiddleware')

const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('./controller')

router.use(protect, admin)

router.route('/').get(getCategories).post(createCategory)
router
  .route('/:id')
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory)

module.exports = router
