<template>
  <q-page class="row items-center justify-evenly">
    <ul>
      <li v-for="funProject in funProjects" :key="funProject.id">
        <router-link :to="{name: 'funProject', params: {id: funProject.id}}" class="text-black" style="text-decoration: none;">
          {{ funProject.name }} - {{ funProject.description }}
        </router-link>
      </li>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { ProjectsAPI } from '../../api/'
import { FunProject } from '../../components/models'

export default defineComponent({
  name: 'Fun',
  setup() {
    const name = 'Fun'
    const $q = useQuasar()
    const funProjects = ref<FunProject[]>([])

    const getData = async () => {
      try {
        $q.loading.show()
        const response = await new ProjectsAPI().readFunProjects()
        funProjects.value = response
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

    return { name, funProjects }
  }
})
</script>
