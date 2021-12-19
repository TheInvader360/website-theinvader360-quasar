<template>
  <q-page>
    <div class="row justify-center">
      <div class="q-pa-md col-xs-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <q-card bordered flat v-if="funProject">
          <div class="q-pa-md row">
            <router-link :to="{ name: 'funProjects' }" class="text-black" style="text-decoration: none;">
              &lt;&lt; All Fun Projects
            </router-link>
          </div>
          <q-card-section>
            <div class="text-h6 text-center"><p>{{ funProject.name }}</p></div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-markdown :src="markdown" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { ProjectsAPI } from '../../api'
import { FunProject } from '../../components/models'
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'

export default defineComponent({
  name: 'Fun Project',
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    QMarkdown
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const name = 'Fun Project'
    const $q = useQuasar()
    const funProject = ref<FunProject>()
    const markdown = ref()
    
    const getData = async () => {
      try {
        $q.loading.show()
        const rfpResponse = await new ProjectsAPI().readFunProject(props.id)
        funProject.value = rfpResponse
        const rmdResponse = await new ProjectsAPI().readMarkdown(funProject.value.markdownPath)
        markdown.value = rmdResponse
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

    return { name, funProject, markdown }
  },
})
</script>
