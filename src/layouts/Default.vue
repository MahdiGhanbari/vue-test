<template>
  <v-layout class="layout">
    <div class="sidebar">
      <div class="sidebar__header">
        <slot name="sidebar-header"/>
      </div>
      <div class="sidebar__content">
        <slot name="sidebar-content"/>
      </div>
    </div>
    <v-main class="main">
      <slot></slot>
    </v-main> 
  </v-layout>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.layout {
  min-height: 935px;
  display: flex;
  padding: 7px; 
  gap: 14px;
}
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    border-bottom: 1px solid #E3E6E8;
    height: 70px;
  }
  &__content {
    flex: 1;
  }
}
.main {
  flex: 2;
  padding: 14px;
}
.sidebar,
.main {
  background: #FFFFFF;
  box-shadow: 0px 14px 60px rgba(0, 0, 0, 0.09);
  border-radius: 14px;
}
</style>
