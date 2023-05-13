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

    <!-- action form -->
    <div class="content">
      <component v-model="store.selectedAction" :is="form" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import SideBarHeader from '@/components/SideBarHeader.vue'
import { useRoute } from 'vue-router'
import TagCustomer from '@/components/forms/TagCustomer.vue'
import { useDefaultStore } from '@/store'

// data
const actName = ref('')
const store = useDefaultStore()
let form: object | undefined = undefined
const forms = {
  'Tag_customer': TagCustomer
}

// hooks
onBeforeMount(() => {
  const route = useRoute()
  const name = route.params.name as String
  actName.value = name.replace(/_/g, ' ')

  // detect form
  type k = keyof typeof forms
  form = forms[name as k]
})

</script>

<style scoped lang="scss">
.content {
  padding: 22px;
}
</style>