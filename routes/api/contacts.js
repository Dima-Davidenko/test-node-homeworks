const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId } = require('../../middlewares');

const { schemas } = require('../../models/Contact');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', isValidId, ctrl.geById);

router.post('/', validateBody(schemas.addSchema), ctrl.add);

router.put('/:id', isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavoriteById
);

router.delete('/:id', isValidId, ctrl.deleteById);

module.exports = router;
