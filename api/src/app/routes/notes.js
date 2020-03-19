const express = require('express');
const router = express.Router();

const note = require('../controllers/note');
const withAuth = require('../middlewares/auth');

router.post('/', withAuth, note.create);
router.get('/:id', withAuth, note.read);

module.exports = router;