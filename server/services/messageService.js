const Message = require('../models/Message');
const { validateMessageInput } = require('./validateMessageInput');

async function listMessages(limit = 50) {
  const parsedLimit = Number.isFinite(limit) ? limit : 50;
  return Message.find().sort({ createdAt: 1 }).limit(parsedLimit).lean();
}

async function saveMessage(payload) {
  const validation = validateMessageInput(payload);
  if (!validation.valid) {
    const error = new Error(validation.error);
    error.statusCode = 400;
    throw error;
  }

  const message = await Message.create(validation.data);
  return message.toObject();
}

module.exports = { listMessages, saveMessage };
