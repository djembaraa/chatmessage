const express = require('express');
const path = require('path');
const messagesRouter = require('./routes/messages');

function createApp(io) {
  const app = express();

  app.set('io', io);
  app.use(express.json());

  app.use('/api/messages', messagesRouter);
  app.use(express.static(path.resolve(__dirname, '..', 'client')));

  app.get(/.*/, (_req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
  });

  app.use((error, _req, res, _next) => {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
      message: error.message || 'Unexpected error.',
    });
  });

  return app;
}

module.exports = { createApp };
