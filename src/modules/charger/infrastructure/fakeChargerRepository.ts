import { Charger, ChargerPrimitives, createChargerFromPrimitives } from '../domain/chager'
import { ChargerRepository } from '../domain/charger-repository'
import data from './fakeData.json'

export const fakeChargerRepository = {
  findById (chargerId: number): Promise<Charger> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = data.find(charger => charger.id === chargerId)

        if (!result) reject(new Error('Not found!'))
        resolve(createChargerFromPrimitives(result as ChargerPrimitives))
      }, 1000)
    })
  }
} as ChargerRepository
