<template>
  <div id="app">
    <Layout>

      <!-- sidebar -->
      <template #sidebar-header>
        <span class="sidebar-title" :style="{ color: route.meta.color }">
          <v-icon v-if="route.path == '/'" icon="fas fa-bolt" size="24" />
          <v-btn v-else @click="router.back()" icon variant="text" density="compact">
            <v-icon icon="fas fa-chevron-left" size="18" />
          </v-btn>
          <div>{{ route.name }}</div>
        </span>
        <v-menu offset="10 130">
          <template #activator="{ props }">
            <v-btn v-show="route.meta.hasMenu" icon variant="text" v-bind="props">
              <v-icon icon="fa-solid fa-ellipsis" color="grey" />
            </v-btn>
          </template>
          <div class="main-menu">
            <ActionItem prepend-icon="fa fa-light fa-toggle-off" @click="changeActionState">
              Make {{ selectedAction?.action.inactive ? 'active' : 'inactive'}}
            </ActionItem>
            <ActionItem prepend-icon="fa fa-regular fa-trash-can" style="color: #FF2D55" @click="deleteAction">
              Make inactive
            </ActionItem>
          </div>
        </v-menu>
      </template>

      <template #sidebar-content>
        <RouterView />
      </template>

      <!--Content,  Assigned actions with details -->
      <div v-if="store.hasAssignedAct">
        <div v-for="(action, name) of store.assignedActions" @click="selectedAction = { name, action }"
          class="action-group"
          :class="{ 'is-selected': name == selectedAction?.name, 'is-inactive': action.inactive}">
          <ActionItem :name="name" :disabled="action.inactive" />

        </div>
      </div>
      <div v-else class="placeholder">
        <div class="placeholder__text">Your actions will appear here</div>
      </div>

    </Layout>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import Layout from '@/layouts/Default.vue'
import { useRoute, useRouter } from 'vue-router'
import { useDefaultStore, ActionGroup } from '@/store'
import ActionItem from './components/ActionItem.vue';

// data
const route = useRoute()
const router = useRouter()
const store = useDefaultStore()
const selectedAction= ref<{action: ActionGroup, name: string}>()


// methods
function changeActionState() {
  if (selectedAction.value) {
    selectedAction.value.action.inactive = !selectedAction.value.action.inactive
  }
}
function deleteAction() {
  if (selectedAction.value) {
    delete store.assignedActions[selectedAction.value?.name]
    selectedAction.value = undefined
  }
}
</script>

<style scoped lang="scss">
.sidebar-title {
  color: #475461;
  display: flex;
  align-items: center;
  gap: 14px;
}

.main-menu {
  background: #FFFFFF;
  box-shadow: 0px 14px 60px rgba(0, 0, 0, 0.09);
  border-radius: 14px;

  &__item {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 14px;
    display: flex;
    gap: 15px;
    align-items: center;
    color: #475461;
  }

  &__item:hover {
    background-color: #F9F9F9;
  }
}

.action-group {
  border: 1px solid #E3E6E8;
  border-radius: 14px;
  overflow: hidden;
}

.action-group + .action-group {
  margin-top: 14px;
}

.placeholder {
  background: #F9F9F9;
  border: 1px dashed #9DA8B4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  width: 100%;
  height: 100%;

  &__text {
    display: inline-block;
    font-weight: 600;
    font-size: 27px;
    line-height: 40px;
    color: #C2CCD6;
    width: 290px;
    text-align: center;
  }
}
.is-selected {
  border: 1px solid #0052FF;
}
</style>