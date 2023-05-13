<template>
  <div id="app">
    <Layout>

      <!-- sidebar -->
      <template #sidebar>
        <RouterView />
      </template>

      <!--Content,  Assigned actions with details -->
      <div v-if="store.hasAssignedAct">
        <div v-for="actGroup of store.assignedActions" :key="actGroup.name" class="action-group"
          :class="{ 'is-selected': actGroup.name == store.selectedAction?.name, 'is-inactive': actGroup.inactive }">
          <ActionItem :name="actGroup.name" :prepend-icon="actGroup.icon" :disabled="actGroup.inactive" />
          <!-- TODO: the all actions of a group will be appear here -->
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
import { useDefaultStore } from '@/store'
import ActionItem from './components/ActionItem.vue';

// data
const store = useDefaultStore()

</script>

<style scoped lang="scss">
.action-group {
  border: 1px solid #E3E6E8;
  border-radius: 14px;
  overflow: hidden;
}

.action-group+.action-group {
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