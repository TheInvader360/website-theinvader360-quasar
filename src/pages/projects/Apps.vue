<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <q-btn-dropdown flat no-caps color="primary" label="Sort Order">
        <q-list>
          <q-item clickable v-close-popup @click="setSortOrder('defaultSortWeight', false)">
            <q-item-section>
              <q-item-label>Favourites</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="setSortOrder('name', true)">
            <q-item-section>
              <q-item-label>Name</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="setSortOrder('releaseDate', false)">
            <q-item-section>
              <q-item-label>Release Date (Newest First)</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="setSortOrder('releaseDate', true)">
            <q-item-section>
              <q-item-label>Release Date (Oldest First)</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div class="row">
      <AppProjectList
        :appProjects="appProjects"
        :orderBy="orderBy"
        :orderAsc="orderAsc"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { ProjectsAPI } from '../../api/'
import { AppProject, AppProjectOrderBy } from '../../components/models'
import AppProjectList from '../../components/AppProjectList.vue'

export default defineComponent({
  name: 'Apps',
  components: { AppProjectList },
  setup() {
    const name = 'Apps'
    const $q = useQuasar()
    const appProjects = ref<AppProject[]>([])
    const orderBy = ref<AppProjectOrderBy>('defaultSortWeight')
    const orderAsc = ref(false)

    const setSortOrder = (attribute: AppProjectOrderBy, ascending: boolean) => {
      orderBy.value = attribute
      orderAsc.value = ascending
    }

    const getData = async () => {
      try {
        $q.loading.show()
        const response = await new ProjectsAPI().readAppProjects()
        appProjects.value = response
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

    return { name, appProjects, orderBy, orderAsc, setSortOrder }
  }
})
</script>
