import { Charger } from '../domain/chager'
import { ChargerRepository } from '../domain/charger-repository'

export function chargerRepositoryBuilder ({ chargerRepository }: { chargerRepository: ChargerRepository }) {
  return async function findChargerById (chargerId: number): Promise<Charger> {
    return chargerRepository.findById(chargerId)
  }
}
