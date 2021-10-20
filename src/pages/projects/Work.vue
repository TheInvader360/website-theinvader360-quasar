<template>
  <q-page class="row items-center justify-evenly">
    <p>{{ name }}</p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Work',
  setup() {
    const name = 'Work'
    return { name };
  }
});
</script>
