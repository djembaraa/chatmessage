function validateMessageInput(payload) {
  const username = typeof payload?.username === 'string' ? payload.username.trim() : '';
  const text = typeof payload?.text === 'string' ? payload.text.trim() : '';

  if (!username) {
    return { valid: false, error: 'Username is required.' };
  }

  if (!text) {
    return { valid: false, error: 'Message text is required.' };
  }

  return { valid: true, data: { username, text } };
}

module.exports = { validateMessageInput };
