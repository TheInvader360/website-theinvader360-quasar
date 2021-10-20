<template>
  <q-footer bordered class="bg-grey-8 text-white">
    <div class="row q-pt-md q-pa-xs">
      <div class="col text-center">
          &copy;{{ year }} TheInvader360
          <br />
          <small>
            <router-link :to="{ name: 'privacy' }" class="text-grey" style="text-decoration: none;">
              Privacy
            </router-link>
            <br />
            <span class="text-grey">
              {{ version }}
            </span>
          </small>
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    const year = computed(() => {
      return new Date().getFullYear();
    });
    const version = computed(() => {
      return process.env.VERSION;
    });
    return { year, version};
  }
});
</script>
