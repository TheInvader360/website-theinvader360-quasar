<template>
  <q-page class="row items-center justify-evenly">
    <p>{{ name }}</p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Fun',
  setup() {
    const name = 'Fun'
    return { name }
  }
})
</script>
