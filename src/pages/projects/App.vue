<template>
  <q-page>
    <div class="row justify-center">
      <div class="q-pa-md col-xs-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <q-card bordered flat>
          <div class="q-pa-md row">
            <router-link :to="{ name: 'appProjects' }" class="text-black" style="text-decoration: none;">
              &lt;&lt; All Apps
            </router-link>
          </div>
          <div class="q-pa-md row justify-center">
            <q-img ratio="1" style="max-width: 200px;" :src="appProject?.imagePath" />
          </div>
          <q-card-section>
            <div class="text-h6 text-center"><p>{{ appProject?.name }}</p></div>
          </q-card-section>
          <q-card-section class="q-pt-none text-center">
            <p>{{ appProject?.description }}</p>
          </q-card-section>
          <q-card-actions class="row justify-center">
            <q-btn v-if="appProject?.urlPlay" round unelevated padding="xs" color="primary" target="_blank" size="xl" type="a" :href="appProject?.urlPlay" icon="svguse:icons.svg#svg-icon-googleplay"/>
            <q-btn v-if="appProject?.urlAmazon" round unelevated padding="xs" color="primary" target="_blank" size="xl" type="a" :href="appProject?.urlAmazon" icon="svguse:icons.svg#svg-icon-amazon"/>
            <q-btn v-if="appProject?.urlGithub" round unelevated padding="xs" color="primary" target="_blank" size="xl" type="a" :href="appProject?.urlGithub" icon="svguse:icons.svg#svg-icon-github"/>
            <q-btn v-if="appProject?.urlApk" round unelevated padding="xs" color="primary" target="_blank" size="xl" type="a" :href="appProject?.urlApk" icon="download"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { ProjectsAPI } from '../../api/'
import { AppProject } from '../../components/models'

export default defineComponent({
  name: 'App',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const name = 'App'
    const $q = useQuasar()
    const appProject = ref<AppProject>()
    
    const getData = async () => {
      try {
        $q.loading.show()
        const response = await new ProjectsAPI().readAppProject(props.id)
        appProject.value = response
      } catch (err) {
        console.error(err)
        $q.notify({type: 'negative', message: (err as Error).message })
      } finally {
        $q.loading.hide()
      }
    }

    onMounted(() => {
      void getData()
    })

    return { name, appProject }
  },
})
</script>
