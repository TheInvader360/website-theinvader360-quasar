<template>
  <q-layout view="hHh lpr fff">
    <q-header bordered class="bg-grey-10 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <router-link :to="{ name: 'home' }" class="text-white q-pl-md" style="text-decoration: none;">
            <img class="q-mt-sm q-pb-none" style="max-width: 270px;" src="images/logo-light-green-13.png">
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar>
        <q-space/>
        <q-btn-group flat>
          <q-btn no-caps to="/about" label="About" />

          <!--
          <q-btn no-caps to="/blog" label="Blog" />
          <q-btn-dropdown no-caps auto-close stretch flat label="Projects">
            <q-list>
              <q-item clickable to="/apps">
                <q-item-section>Apps</q-item-section>
              </q-item>
              <q-item clickable to="/fun">
                <q-item-section>Fun</q-item-section>
              </q-item>
              <q-item clickable to="/work">
                <q-item-section>Work</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          -->
          <q-btn no-caps to="/apps" label="Apps" />

        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Footer,
  },
})
</script>
