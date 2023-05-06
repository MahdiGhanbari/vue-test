<template>
  <v-layout class="layout">
    <div class="sidebar">
      <div class="sidebar__title">
        <slot name="sidebar-title"/>
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
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    border-bottom: 1px solid #E3E6E8
  }
  &__content {
    flex: 1;
    padding: 22px;
  }
}
main {
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
