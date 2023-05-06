<template>
  <Layout>

    <!-- header -->
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

    <!-- action list -->
    <template #sidebar-content>
      <div class="section">
        <h4 class="section__title">Assigned actions</h4>
        <p class="section__description">The selected actions will run in the background when the user journey gets to
          this element</p>
      </div>

      <div class="list">
        <div v-for="action in ASSIGNED_ACTIONS" :key="action" class="list__item list__action-item" :class="{'is-inactive': true}">
          <div>
            <v-icon icon="fa-solid fa-plus" class="list__action-item__icon" size="24"/>
            {{ action }}
          </div>
          <span class="budge"> Inactive </span>
        </div>
        
        <div class="list__add-btn list__item">
          Add actions
          <v-icon icon="fa-solid fa-plus" />
        </div>
      </div>
    </template>

    <!-- content -->
    <div v-if="ASSIGNED_ACTIONS.length">
      actions details
    </div>
    <div v-else class="placeholder">
      <div class="placeholder__text">Your actions will appear here</div>
    </div>

  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/layouts/Default.vue'

const ASSIGNED_ACTIONS = [

]

</script>

<style scoped lang="scss">
.title {
  color: #F9B506;
}

.section {
  &__title {
    font-weight: 600;
    line-height: 19px;
    color: #475461
  }

  &__description {
    margin-top: 4px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 300;
    color: #9DA8B4;
  }
}

.list {
  border: 1px solid #E3E5E8;
  border-radius: 14px;
  margin-top: 22px;

  &__add-btn {
    color: #0052FF;
    font-weight: 600;
  }

  &__item {
    padding: 22px 25px;
    line-height: 19px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item:hover {
    background-color: #F2F2F3;
  }

  &__action-item {
    font-weight: 400;
    color: #475461;
    &__icon {
      margin-inline-end: 16px;
    }
  }

  &__item+&__item {
    border-top: 1px solid #E3E5E8;
  }
}

.budge {
  font-weight: 400px;
  font-size: 10px;

  &::before {
    content: "";
    border: 4px solid;
    border-radius: 50%;
    display: inline-block;
  }
}
.is-inactive {
  color: #C2CCD6;
  pointer-events: none;
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
</style>