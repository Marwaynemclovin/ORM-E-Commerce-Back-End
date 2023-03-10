const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    });
    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const createdCategory = await Category.create(req.body);
    res.status(200).json(createdCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;