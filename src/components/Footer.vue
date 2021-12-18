<template>
  <q-footer bordered class="bg-grey-10 text-white">
    <div class="row q-pt-md q-pa-xs">
      <div class="col text-center">
        <div class="q-mb-sm text-grey-4">
          <q-btn padding="xs" target="_blank" round flat size="lg" type="a" href="https://play.google.com/store/apps/developer?id=TheInvader360" icon="svguse:icons.svg#svg-icon-googleplay"/>
          <q-btn padding="xs" target="_blank" round flat size="lg" type="a" href="https://www.amazon.co.uk/s?field-brandtextbin=TheInvader360" icon="svguse:icons.svg#svg-icon-amazon"/>
          <q-btn padding="xs" target="_blank" round flat size="lg" type="a" href="https://youtube.com/theinvader360" icon="svguse:icons.svg#svg-icon-youtube"/>
          <q-btn padding="xs" target="_blank" round flat size="lg" type="a" href="https://www.facebook.com/TheInvader360" icon="svguse:icons.svg#svg-icon-facebook"/>
          <q-btn padding="xs" target="_blank" round flat size="lg" type="a" href="https://twitter.com/theinvader360" icon="svguse:icons.svg#svg-icon-twitter"/>
          <q-btn padding="xs" target="_blank" round flat size="lg" type="a" href="https://github.com/theinvader360" icon="svguse:icons.svg#svg-icon-github"/>
          <q-btn padding="xs" target="_blank" round flat size="lg" type="a" href="mailto:theinvader360@gmail.com" icon="svguse:icons.svg#svg-icon-email"/>
        </div>
        <div class="q-mb-xs text-grey-4">
          &copy;{{ year }} TheInvader360
        </div>
        <small>
          <router-link :to="{ name: 'privacy' }" class="text-grey-8" style="text-decoration: none;">
            Privacy
          </router-link>
          <br />
          <span class="text-grey-8">
            {{ version }}
          </span>
        </small>
      </div>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const year = computed(() => {
      return new Date().getFullYear()
    })
    const version = computed(() => {
      return process.env.VERSION
    })
    return { year, version}
  }
})
</script>
