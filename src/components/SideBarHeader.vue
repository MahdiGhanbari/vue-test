<template>
  <div class="sidebar-header">
    <span class="sidebar-header__title">
      <slot name="prepend"></slot>
      <slot></slot>
    </span>
    <v-menu offset="10 130">
      <template #activator="{ props }">
        <v-btn v-show="!disableMenu" icon variant="text" v-bind="props" color="grey">
          <v-icon icon="fa-solid fa-ellipsis" />
        </v-btn>
      </template>
      <div class="sidebar-header__main-menu">
        <ActionItem prepend-icon="fa fa-light fa-toggle-off" @click="selectedAction?.changeState()">
          Make {{ selectedAction?.inactive? 'active': 'inactive' }}
        </ActionItem>
        <ActionItem prepend-icon="fa fa-regular fa-trash-can" @click="removeSelectedAction">
          Make inactive
        </ActionItem>
      </div>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import ActionItem from './ActionItem.vue';
import { useDefaultStore } from '@/store';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';


defineProps<{ disableMenu?: boolean }>()

// data
const store = useDefaultStore()
const { selectedAction } = storeToRefs(store)
const { removeSelectedAction } = store

</script>

<style lang="scss">
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  border-bottom: 1px solid #E3E6E8;
  height: 70px;

  &__title {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  &__main-menu {
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
}
</style>