<template>
  <div id="app">
    <Layout>

      <!-- sidebar -->
      <template #sidebar-header>
        <span class="sidebar-title" :style="{color: route.meta.color}">
          <v-icon v-if="route.path == '/'" icon="fas fa-bolt" size="24"/>
          <v-btn v-else @click="router.back()" icon variant="text" density="compact">
            <v-icon icon="fas fa-chevron-left" size="18"/>
          </v-btn>
          <div>{{ route.name }}</div>
        </span>
        <v-menu offset="10 130">
          <template #activator="{props}">
            <v-btn v-show="route.meta.hasMenu" icon variant="text" v-bind="props">
              <v-icon icon="fa-solid fa-ellipsis" color="grey" />
            </v-btn>
          </template>
          <div class="main-menu">
            <div class="main-menu__item">
              <v-icon icon="fa fa-light fa-toggle-off"/>
              Make inactive
            </div>
            <div class="main-menu__item" style="color: #FF2D55">
              <v-icon icon="fa fa-regular fa-trash-can"/>            
              Delete action
            </div>
          </div>
        </v-menu>
      </template>

      <template #sidebar-content>
        <RouterView/>
      </template>

      <!--Content,  Assigned actions with details -->
      <div v-if="store.AssignedActions.length">
        <div v-for="action of store.AssignedActions">
          {{ action }}
        </div>
      </div>
      <div v-else class="placeholder">
        <div class="placeholder__text">Your actions will appear here</div>
      </div>

    </Layout>
  </div>
</template>

<script lang="ts" setup>
  import Layout from '@/layouts/Default.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useDefaultStore } from '@/store'

  // data
  const ASSIGNED_ACTIONS: Array<object> = []
  const route = useRoute()
  const router = useRouter()
  const store = useDefaultStore()


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
</style>