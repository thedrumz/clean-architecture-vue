import { ref, Ref } from 'vue'
import { findChargerById } from '../../../../../modules/charger/application'
import { changeState, subscribe as subs } from '../../../../../modules/charger/application/charger-store'
import { Charger } from '../../../../../modules/charger/domain/chager'

interface UseChargerStore {
  fetchCharger: (chargerId: number) => Promise<Ref<Charger>>,
  subscribe: (callback: (charger: Charger) => void) => void
}

const fetchCharger = async (chargerId: number): Promise<Ref<Charger>> => {
  const charger = ref()

  const result = await findChargerById(chargerId)
  changeState(result)
  charger.value = result

  return charger
}

const subscribe = (callback: (charger: Charger) => void) => {
  subs(callback)
}

export default (): UseChargerStore => {
  return {
    fetchCharger,
    subscribe
  }
}
