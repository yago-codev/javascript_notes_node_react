const express = require('express');
const router = express.Router();

const note = require('../controllers/note');
const withAuth = require('../middlewares/auth');

router.post('/', withAuth, note.create);
router.get('/', withAuth, note.readAll);
router.get('/search', withAuth, note.search);
router.get('/:id', withAuth, note.read);
router.put('/:id', withAuth, note.edit);
router.delete('/:id', withAuth, note.delete);

module.exports = router;