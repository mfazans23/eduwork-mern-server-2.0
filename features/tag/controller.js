const asyncHandler = require('express-async-handler')
const Tag = require('./model')

const getTags = asyncHandler(async (req, res) => {
  const tags = await Tag.find({})
  res.json(tags)
})

const getTagById = asyncHandler(async (req, res) => {
  const tag = await Tag.findById(req.params.id)
  if (tag) {
    res.json(tag)
  } else {
    res.status(404)
    throw new Error('Tag not found')
  }
})

const createTag = asyncHandler(async (req, res) => {
  const { name, description } = req.body

  let payload = {}

  Object.keys(req.body).forEach((key) => {
    if (Tag.schema.obj.hasOwnProperty(key)) {
      payload[key] = req.body[key]
    }
  })

  const tag = await Tag.create(payload)
  res.status(201).json(tag)
})

const updateTag = asyncHandler(async (req, res) => {
  const tag = await Tag.findById(req.params.id)

  if (tag) {
    Object.keys(req.body).forEach((key) => {
      if (tag.toObject().hasOwnProperty(key)) {
        tag[key] = req.body[key]
      }
    })

    const updatedTag = await tag.save()
    res.json(updatedTag)
  } else {
    res.status(404)
    throw new Error('Tag not found')
  }
})

const deleteTag = asyncHandler(async (req, res) => {
  const tag = await Tag.findById(req.params.id)

  if (tag) {
    await tag.remove()
    res.json({ message: 'Tag removed' })
  } else {
    res.status(404)
    throw new Error('Tag not found')
  }
})

module.exports = {
  getTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
}
