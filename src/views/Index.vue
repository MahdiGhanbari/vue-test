<template>
  <div class="section">
    <h4 class="section__title">Assigned actions</h4>
    <p class="section__description">The selected actions will run in the background when the user journey gets to
      this element</p>
  </div>

  <div class="list">
    <div v-for="action in ASSIGNED_ACTIONS" class="list__item list__action-item"
      :class="{ 'is-inactive': true }">
      <div>
        <v-icon icon="fa-solid fa-plus" class="list__action-item__icon" size="24" />
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

<script lang="ts" setup>
const ASSIGNED_ACTIONS: Array<object> = []
</script>

<style scoped lang="scss">
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
</style>