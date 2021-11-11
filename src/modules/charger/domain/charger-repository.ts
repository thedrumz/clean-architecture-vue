import { Charger } from './chager'

export interface ChargerRepository {
  findById(id: number): Promise<Charger>
}
