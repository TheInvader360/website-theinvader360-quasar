<template>
  <q-page>
    <div class="row justify-center">
      <div class="q-pa-md col-xs-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <h6>{{ name }}</h6>
        <p>
          Hi, I'm TheInvader360, a software developer based in sunny North Wales.
        </p>
        <p>
          I've been tinkering with electronics and computers since pretty much forever. This hobby grew into a career, and I now get paid to essentially have lots of nerdy fun, which is nice.
        </p>
        <p>
          I like to spend my time making toys and games, educational doodads, pointless fluff, stuff that will almost certainly never see the light of day, and the occasional thing that might make some small positive difference in the world. I generally like to learn new things and puzzle stuff out, and as a result my personal projects often serve no purpose other than to simply amuse myself for a little while.
        </p>
        <p>
          This site is intended as a little corner of the web where I can post a bit about some of the things I do - useful work related stuff, nonsense just for fun stuff, and anything in between.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const name = 'Welcome!'
    return { name }
  }
})
</script>
