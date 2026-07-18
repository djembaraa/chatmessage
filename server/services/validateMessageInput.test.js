const test = require('node:test');
const assert = require('node:assert/strict');
const { validateMessageInput } = require('./validateMessageInput');

test('validateMessageInput rejects missing username', () => {
  const result = validateMessageInput({ text: 'hello' });
  assert.equal(result.valid, false);
  assert.equal(result.error, 'Username is required.');
});

test('validateMessageInput rejects missing text', () => {
  const result = validateMessageInput({ username: 'Alex' });
  assert.equal(result.valid, false);
  assert.equal(result.error, 'Message text is required.');
});

test('validateMessageInput accepts valid payload', () => {
  const result = validateMessageInput({ username: '  Alex  ', text: '  hello  ' });
  assert.equal(result.valid, true);
  assert.deepEqual(result.data, { username: 'Alex', text: 'hello' });
});
