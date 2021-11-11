<template>
  <div>
    <charger-search />
    <charger-details />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChargerDetails from './ChargerDetails.vue'
import ChargerSearch from './ChargerSearch.vue'

export default defineComponent({
  components: { ChargerDetails, ChargerSearch },
  name: 'ChargerLayout'
})
</script>
