<template>
  <div id="app">
    <Layout>

      <!-- sidebar -->
      <template #sidebar-title>
        <span class="title">
          <v-icon icon="fas fa-regular fa-bolt" />
          Action
        </span>
        <v-menu location="bottom" offset="10 130">
          <template #activator="{props}">
            <v-btn icon variant="text" v-bind="props">
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
      <div v-if="ASSIGNED_ACTIONS.length">
        actions details
      </div>
      <div v-else class="placeholder">
        <div class="placeholder__text">Your actions will appear here</div>
      </div>

    </Layout>
  </div>
</template>

<script lang="ts" setup>
  import Layout from '@/layouts/Default.vue'
  const ASSIGNED_ACTIONS: Array<object> = []
</script>

<style scoped lang="scss">
.title {
  color: #F9B506;
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