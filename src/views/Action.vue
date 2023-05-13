<template>
  <div>
    <SideBarHeader disableMenu>
      <template #prepend>
        <v-btn to="/" icon variant="text" density="compact">
          <v-icon icon="fas fa-chevron-left" size="18" />
        </v-btn>
      </template>
      {{ actName }}
    </SideBarHeader>

</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import SideBarHeader from '@/components/SideBarHeader.vue'
import { useRoute } from 'vue-router'
import { useDefaultStore } from '@/store'

// data
const actName = ref('')
const store = useDefaultStore()

// hooks
onBeforeMount(() => {
  const route = useRoute()
  const name = route.params.name as String
  actName.value = name.replace(/_/g, ' ')

})

</script>

<style scoped lang="scss">
.content {
  padding: 22px;
}
</style>