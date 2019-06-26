import S from 'string'
import { shout } from './utils'

const output = 'hello world'
export function sayMessage() {
  return output
}

export function shoutMessage() {
  return shout(output)
}

export function sayMessageWithUnderScores() {
  // eslint-disable-next-line babel/new-cap
  const { s } = S(output).underscore()
  return s
}

export { output }
