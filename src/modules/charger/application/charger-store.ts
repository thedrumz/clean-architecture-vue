import { Charger } from '../domain/chager'

type Listener = (charger: Charger) => void

const listeners: Listener[] = []

export const subscribe = (listener: Listener): void => {
  listeners.push(listener)
}
export const unsubscibe = (listener: Listener): void => {
  const index = listeners.indexOf(listener)
  if (index > -1) {
    listeners.splice(index, 1)
  }
}
export const changeState = (state: Charger): void => {
  if (listeners.length > 0) {
    listeners.forEach(listener => listener(state))
  }
}
