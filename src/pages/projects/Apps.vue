<template>
  <q-page class="q-pa-md">
    <div class="row">
        <q-btn flat no-caps color="primary" @click="setOrderBy('id')" label="Order by ID" />
        <q-btn flat no-caps color="primary" @click="setOrderBy('name')" label="Order by Name" />
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
import { defineComponent, ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { ProjectsAPI } from '../../api/';
import { AppProject, AppProjectOrderBy } from '../../components/models';
import AppProjectList from '../../components/AppProjectList.vue';

export default defineComponent({
  name: 'Apps',
  components: { AppProjectList },
  setup() {
    const name = 'Apps';
    const $q = useQuasar();
    const appProjects = ref<AppProject[]>([]);
    const orderBy = ref<AppProjectOrderBy>('name');
    const orderAsc = ref(true);

    const setOrderBy = (attribute: AppProjectOrderBy) => {
      if (orderBy.value == attribute) {
        orderAsc.value = !orderAsc.value
      }
      orderBy.value = attribute
    }

    const getData = async () => {
      try {
        $q.loading.show();
        const response = await new ProjectsAPI().readAppProjects();
        console.log(response);
        appProjects.value = response;
      } catch (err) {
        console.error(err);
        $q.notify({type: 'negative', message: (err as Error).message });
      } finally {
        $q.loading.hide()
      }
    };

    onMounted(() => {
      void getData();
    });

    return { name, appProjects, orderBy, orderAsc, setOrderBy };
  }
});
</script>
