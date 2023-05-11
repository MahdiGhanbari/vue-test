<template>
  <v-layout class="layout">
    <div class="sidebar">
      <slot name="sidebar" />
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
