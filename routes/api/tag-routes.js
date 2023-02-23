const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });
    res.json(allTags);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product, through: ProductTag }]
    });
    res.json(singleTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createdTag = await Tag.create(req.body);
    res.json(createdTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.json(deletedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
