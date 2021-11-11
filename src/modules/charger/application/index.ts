import { chargerRepositoryBuilder } from './find-charger-by-id'
import { chargerRepository } from '../infrastructure'

export const findChargerById = chargerRepositoryBuilder({ chargerRepository })
