import { Factory } from 'fishery'
import { name, datatype } from 'faker'
import { Charger, ChargerPrimitives, createChargerFromPrimitives } from '../../src/modules/charger/domain/chager'
import { Nullable } from '../../src/shared/types'

interface Params {
  id?: number,
  serialNumber?: string,
  name?: Nullable<string>,
  typeName?: string,
  status?: number
}

const factory = Factory.define(() => ({
  id: datatype.number(),
  serialNumber: datatype.number().toString(),
  name: name.findName(),
  typeName: name.title(),
  status: datatype.number()
}))

export const generateCharger = (params?: Params): Charger => {
  const primitives = <ChargerPrimitives>factory.build(params)
  return createChargerFromPrimitives(primitives)
}

export function generateChargerList (min = 0, max = 10): Array<Charger> {
  const length = randQuantity(min, max)
  const primitivesArray = <Array<ChargerPrimitives>>factory.buildList(length)
  return primitivesArray.map(primitives => createChargerFromPrimitives(primitives))
}

const randQuantity = (min = 0, max = 10) => Math.random() * (max - min) + min
