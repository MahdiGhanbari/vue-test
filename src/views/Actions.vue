<template>
  <div class="actions-page">
    <div class="actions-page__main-section">
      <!-- search box -->
      <div class="search-box">
        <v-icon class="fa fa-magnifying-glass" size="16" color="#9DA8B4" />
        <input v-model="query" type="text" placeholder="Search actions..." />
      </div>
  
      <!-- action list -->
      <div class="list">
        <div v-for="(actions, actGroup) of list">
          <div class="list__group-title">{{ actGroup }}</div>

          <ActionItem v-for="actName of actions" :name="actName" :key="actName" class="list__action-item">
            <template #append:icon>
              <CheckMark :modelValue="selectedActions.includes(actName)" @update:modelValue="mark($event, actName)"/>
            </template>
          </ActionItem>
        </div>
      </div>
    </div>

    <!-- confirm or cancel -->
    <div v-show="selectedActions.length" class="confiramtion">
      <ActionButton @click="deselect" block>Cancel</ActionButton>
      <ActionButton @click="confirm" type="primary" block>Confirm</ActionButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CheckMark from '@/components/CheckMark.vue'
import ActionButton from '@/components/ActionButton.vue'
import ActionItem from '@/components/ActionItem.vue'
import { useDefaultStore } from '@/store'

const query = ref('')
const selectedActions = ref([])
const store = useDefaultStore()
const ACTIONS = {
  'Native Popup actions': ['Tag customer', 'Tag order', 'Send email notification', 'Select digital product', 'Make HTTPS request'],
  'Integrations with other apps': ['Send data to Google Sheet']
}

const list = computed(() => {
  const result = {}

  for (let actGroup in ACTIONS) {
    for (let actName of ACTIONS[actGroup]) {
      actName = actName.toLowerCase()
      const str = query.value.toLowerCase()
      const isConfirmed = store.AssignedActions[actName]

      if (actName.search(str) >= 0 && !isConfirmed) {
        result[actGroup] ? result[actGroup].push(actName) : result[actGroup] = [actName]
      }
    }
  }
  return result
})

function mark(isAdded, actName) {
  if(isAdded) {
    selectedActions.value.push(actName)
  } else {
    const index = selectedActions.value.indexOf(actName)
    selectedActions.value.splice(index, 1)
  }
}

function deselect() {
  selectedActions.value = []
}

function confirm() {
  store.confirmActions(selectedActions.value)
  selectedActions.value = []
}
</script>

<style scoped lang="scss">
.actions-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  &__main-section {
    flex: 1;
    padding: 22px;
  }
}
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E3E6E8;
  border-radius: 14px;
  padding: 13px 16px;
  height: 47px;
  color: #475461;

  & input {
    flex: 1;
    border: none;
    background: inherit;
    margin-inline-start: 16px;
  }

  & input:focus {
    outline: none;
  }
}
.list {
  margin-top: 14px;

  &__group-title {
    display: inline-block;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    padding-block: 14px;
    color: #9DA8B4;
  }
  &__action-item {
    &__check {
      width: 24px;
      height: 24px;
      border: 1px solid #E3E6E8;
      border-radius: 8px;
    }
  }
}
.confiramtion {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 22px;
  padding: 22px;
  border-top: 1px solid #E3E6E8;
  box-shadow: 0px 14px 60px rgba(0, 0, 0, 0.09);
}
</style>
<style>
.search-box input::placeholder {
  color: #9DA8B4;
}
</style>