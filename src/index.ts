import { shout } from './utils'

const output = 'Hello World'
export function sayMessage() {
  return output
}

export function shoutMessage() {
  return shout(output)
}

export { output }
