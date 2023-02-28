const router = require('express').Router()

const {
  getTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} = require('./controller')
const { protect, admin } = require('../../middleware/authMiddleware')

router.use(protect, admin)

router.route('/').get(getTags).post(createTag)
router.route('/:id').get(getTagById).put(updateTag).delete(deleteTag)

module.exports = router
