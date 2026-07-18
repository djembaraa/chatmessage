const express = require('express');
const { listMessages, saveMessage } = require('../services/messageService');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const messages = await listMessages(50);
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const message = await saveMessage(req.body);
    req.app.get('io').emit('chat:message', message);
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
