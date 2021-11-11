import { Nullable } from '../../../shared/types'

export interface ChargerStatus {
  code: number,
  name: string
}

export interface Charger {
  id: number,
  serialNumber: string,
  name: string,
  typeName: string,
  status: ChargerStatus
}

export interface ChargerPrimitives {
  id: number,
  serialNumber: string,
  name: Nullable<string>,
  typeName: string,
  status: number
}

export function createChargerFromPrimitives (chargerPrimitives: ChargerPrimitives): Charger {
  return {
    id: chargerPrimitives.id,
    serialNumber: chargerPrimitives.serialNumber,
    name: getName(chargerPrimitives),
    typeName: chargerPrimitives.typeName,
    status: getStatus(chargerPrimitives)
  }
}

const getName = (chargerPrimitives: ChargerPrimitives): string => {
  if (chargerPrimitives.name) return chargerPrimitives.name
  return `${chargerPrimitives.typeName} ${chargerPrimitives.serialNumber}`
}

const getStatus = (chargerPrimitives: ChargerPrimitives): ChargerStatus => {
  return {
    code: chargerPrimitives.status,
    name: chargerStatuses.find(s => s.codes.includes(chargerPrimitives.status))?.status || 'disconnected'
  }
}

const chargerStatuses = [
  {
    status: 'waiting',
    codes: [164, 180, 181, 183, 184, 185, 186, 187, 188]
  },
  {
    status: 'charging',
    codes: [193, 194, 195]
  },
  {
    status: 'ready',
    codes: [161, 162, 163]
  },
  {
    status: 'paused',
    codes: [178, 182]
  },
  {
    status: 'scheduled',
    codes: [177, 179]
  },
  {
    status: 'discharging',
    codes: [196]
  },
  {
    status: 'error',
    codes: [14, 15]
  },
  {
    status: 'disconnected',
    codes: [0, 163, null]
  },
  {
    status: 'locked',
    codes: [209, 210, 165]
  }
]
