import { sayMessage, shoutMessage } from '..'

test('should say hello world', () => {
  expect(sayMessage()).toBe('Hello World')
})

test('should shout hello world', () => {
  expect(shoutMessage()).toBe('HELLO WORLD!')
})
