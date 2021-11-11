import { generateCharger } from '../../../../__tests__/mocks/charger-mother'

describe('Charger entity', () => {
  it('should create a name if empty', () => {
    const charger = generateCharger({ name: '' })
    const chargerName = `${charger.typeName} ${charger.serialNumber}`
    expect(charger.name).toBe(chargerName)
  })

  it('should set the correct status from code', () => {
    const charger = generateCharger({ status: 161 })
    expect(charger.status).toEqual({ code: 161, name: 'ready' })
  })
})
