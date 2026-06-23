var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

/**
 * @swagger
 * /api/v1/shows:
 *   get:
 *     summary: Получить все шоу
 *     tags: [Shows]
 *     responses:
 *       200:
 *         description: Список шоу
 */
router.get('/shows', function(req, res, next) {
  queries.getAll()
    .then(function(shows) { res.status(200).json(shows); })
    .catch(function(error) { next(error); });
});

/**
 * @swagger
 * /api/v1/shows/{id}:
 *   get:
 *     summary: Получить шоу по ID
 *     tags: [Shows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Одно шоу
 */
router.get('/shows/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
    .then(function(show) { res.status(200).json(show); })
    .catch(function(error) { next(error); });
});

/**
 * @swagger
 * /api/v1/shows:
 *   post:
 *     summary: Добавить новое шоу
 *     tags: [Shows]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, channel, genre, rating, explicit]
 *             properties:
 *               name: { type: string }
 *               channel: { type: string }
 *               genre: { type: string }
 *               rating: { type: integer, minimum: 1, maximum: 5 }
 *               explicit: { type: boolean }
 *     responses:
 *       200:
 *         description: Созданное шоу
 */
router.post('/shows', function(req, res, next) {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({ error: 'You cannot set the id field' });
  }
  queries.add(req.body)
    .then(function(showID) { return queries.getSingle(showID); })
    .then(function(show) { res.status(200).json(show); })
    .catch(function(error) { next(error); });
});

/**
 * @swagger
 * /api/v1/shows/{id}:
 *   put:
 *     summary: Обновить шоу
 *     tags: [Shows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               channel: { type: string }
 *               genre: { type: string }
 *               rating: { type: integer, minimum: 1, maximum: 5 }
 *               explicit: { type: boolean }
 *     responses:
 *       200:
 *         description: Обновлённое шоу
 */
router.put('/shows/:id', function(req, res, next) {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({ error: 'You cannot update the id field' });
  }
  queries.update(req.params.id, req.body)
    .then(function() { return queries.getSingle(req.params.id); })
    .then(function(show) { res.status(200).json(show); })
    .catch(function(error) { next(error); });
});

/**
 * @swagger
 * /api/v1/shows/{id}:
 *   delete:
 *     summary: Удалить шоу
 *     tags: [Shows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Удалённое шоу
 */
router.delete('/shows/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
    .then(function(show) {
      queries.deleteItem(req.params.id)
        .then(function() { res.status(200).json(show); })
        .catch(function(error) { next(error); });
    }).catch(function(error) { next(error); });
});

module.exports = router;