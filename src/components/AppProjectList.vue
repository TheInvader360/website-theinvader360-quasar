<template>
  <div>
    <p v-if="orderedAppProjects.length">Ordered by {{ orderBy }} {{ orderAsc ? 'ascending' : 'descending' }}</p>
    <li v-for="appProject in orderedAppProjects" :key="appProject.id">
      {{ appProject.name }}
      <div>
        <p>{{ appProject.description }}</p>
      </div>
    </li>
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
