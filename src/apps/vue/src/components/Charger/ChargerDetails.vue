<template>
  <div>
    {{ charger }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Charger } from '../../../../../modules/charger/domain/chager'
import useChargerStore from './useChargerStore'

export default defineComponent({
  name: 'ChargerDetails',
  props: {
    msg: String
  },
  setup () {
    const chargerStore = useChargerStore()
    const charger = ref()
    chargerStore.subscribe((state: Charger): void => {
      charger.value = state
    })

    return { charger }
  }
})
</script>
