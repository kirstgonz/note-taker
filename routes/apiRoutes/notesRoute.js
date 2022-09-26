const router = require('express').Router();
const { newNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    const result = notes;
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
  
router.post('/notes', (req, res) => {
    const note = newNote(req.body, notes)
    res.json(note);
});

module.exports = router;