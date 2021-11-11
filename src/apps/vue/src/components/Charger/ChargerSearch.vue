<template>
  <div>
    <h2>Find a charger</h2>
    <input v-model="chargerId" type="text" placeholder="Charger id (1, 2 or 3)">
    <button @click="methods.handleClick">Search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useChargerStore from './useChargerStore'

export default defineComponent({
  name: 'ChargerSearch',
  setup () {
    const chargerStore = useChargerStore()

    const chargerId = ref()

    const methods = {
      handleClick: () => {
        chargerStore.fetchCharger(Number(chargerId.value))
      }
    }

    return {
      chargerId,
      methods
    }
  }
})
</script>

<style>

</style>
