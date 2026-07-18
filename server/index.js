require('dotenv').config();

const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const { createApp } = require('./app');
const { listMessages, saveMessage } = require('./services/messageService');

const PORT = Number(process.env.PORT || 3000);
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chatmessage';

async function start() {
  await mongoose.connect(MONGODB_URI);

  const httpServer = http.createServer();
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  const app = createApp(io);
  httpServer.on('request', app);

  io.on('connection', async (socket) => {
    socket.emit('chat:history', await listMessages(50));

    socket.on('chat:send', async (payload, ack) => {
      try {
        const message = await saveMessage(payload);
        io.emit('chat:message', message);
        if (typeof ack === 'function') {
          ack({ ok: true });
        }
      } catch (error) {
        if (typeof ack === 'function') {
          ack({ ok: false, message: error.message });
        }
      }
    });
  });

  httpServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
