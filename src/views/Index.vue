<template>
  <div class="home-page">
    <div class="section">
      <h4 class="section__title">Assigned actions</h4>
      <p class="section__description">The selected actions will run in the background when the user journey gets to
        this element</p>
    </div>

    <div class="list">
      <ActionItem v-for="(action, actName) in store.assignedActions" :disabled="action.inactive" :name="actName" class="list__item">
        <template #append:icon>
          <span v-if="action.inactive" class="budge"> Inactive </span>
        </template>
      </ActionItem>

      <ActionItem append-icon="fa-solid fa-plus" class="list__item list__add-btn" @click="router.push('/actions')">
        Add actions
      </ActionItem>      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import ActionItem from '@/components/ActionItem.vue';
import { useDefaultStore } from '@/store'

const store = useDefaultStore()
const router = useRouter()

</script>

<style scoped lang="scss">
.home-page {
  padding: 22px;
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
    text-decoration: none;
  }
  
  &__item {
    padding: 24px;
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
</style>