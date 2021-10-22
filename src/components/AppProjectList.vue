<template>
  <div class="row fit">
    <p class="fit text-center" v-if="orderedAppProjects.length">Ordered by {{ orderBy }} {{ orderAsc ? 'ascending' : 'descending' }}</p>
  </div>
  <div class="row fit">
    <div v-for="appProject in orderedAppProjects" :key="appProject.id" class="q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 flex">
      <q-card flat bordered class="fit">
        <q-card-section horizontal class="fit">
          <q-card-section>
            <div class="text-h6 q-mt-sm q-mb-xs">
              <router-link :to="{name: 'appProject', params: {id: appProject.id}}" class="text-black" style="text-decoration: none;">
                {{ appProject.name }}
              </router-link>
            </div>
            <div class="text-caption text-grey float-right fit">{{ appProject.description }}</div>
          </q-card-section>
          <div class="col-4 q-my-md q-mr-sm">
            <router-link :to="{name: 'appProject', params: {id: appProject.id}}">
              <q-img class="fit" ratio="1" fit="contain" position="0% 50%" :src="appProject.imagePath" />
            </router-link>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { AppProject, AppProjectOrderBy } from './models'

export default defineComponent({
  props: {
    appProjects: {
      type: Array as PropType<AppProject[]>,
      required: true
    },
    orderBy: {
      type: String as PropType<AppProjectOrderBy>,
      required: true
    },
    orderAsc: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const orderedAppProjects = computed(() => {
      return [...props.appProjects].sort((a: AppProject, b: AppProject) => {
        if (props.orderAsc) {
          return a[props.orderBy] > b[props.orderBy] ? 1 : -1
        } else {
          return a[props.orderBy] < b[props.orderBy] ? 1 : -1
        }
      })
    })
    return { orderedAppProjects }
  },
})
</script>
