<template>
  <q-page>
    <div class="row justify-center">
      <div class="q-pa-md col-xs-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <h6>{{ name }}</h6>
        <p>
          I do not collect any information about you or your app usage.
        </p>
        <p>
          Some of my games and apps use third party services that may in turn collect this kind of information.
        </p>
        <p>
          You can review the third party privacy policies here:
          <ul>
            <li><a href="https://www.google.com/intl/en/policies/privacy" target="_blank" class="text-black" style="text-decoration: none;">Google</a></li>
            <li><a href="https://unity3d.com/legal/privacy-policy" target="_blank" class="text-black" style="text-decoration: none;">Unity</a></li>
          </ul>
        </p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Privacy',
  setup() {
    const name = 'Privacy Policy'
    return { name }
  }
})
</script>
