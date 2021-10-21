<template>
  <q-layout view="hHh lpr fff">
    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <router-link :to="{ name: 'home' }" class="text-white q-pl-md" style="text-decoration: none;">
            TheInvader360
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar>
        <q-space/>
        <q-btn-group flat>
          <q-btn no-caps to="/about" label="About" />
          <q-btn no-caps to="/blog" label="Blog" />
          <q-btn-dropdown no-caps auto-close stretch flat label="Projects">
            <q-list>
              <q-item clickable to="/projects-apps">
                <q-item-section>Apps</q-item-section>
              </q-item>
              <q-item clickable to="/projects-fun">
                <q-item-section>Fun</q-item-section>
              </q-item>
              <q-item clickable to="/projects-work">
                <q-item-section>Work</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
import { defineComponent } from 'vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Footer,
  },
});
</script>
