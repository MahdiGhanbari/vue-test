<template>
  <div class="actions-page">
    <SideBarHeader class="actions-page__header" disableMenu>
      <template #prepend>
        <v-btn to="/" icon variant="text" density="compact">
          <v-icon icon="fas fa-chevron-left" size="18" />
        </v-btn>
      </template>
      Add actions
    </SideBarHeader>
    <div class="actions-page__content">
      <!-- search box -->
      <div class="search-box">
        <v-icon class="fa fa-magnifying-glass" size="16" color="#9DA8B4" />
        <input v-model="query" type="text" placeholder="Search actions..." />
      </div>

      <!-- action list -->
      <div class="list">
        <div v-for="(actGroups, actCategoryName) of list" :key="actCategoryName">
          <div class="list__group-title">{{ actCategoryName }}</div>

          <ActionItem v-for="actGroup of actGroups" :name="actGroup.name" :key="actGroup.name"
            :prependIcon="actGroup.icon" class="list__action-item">
            <template #append:icon>
              <CheckMark :modelValue="selectedActions.includes(actGroup)" @update:modelValue="mark($event, actGroup)" />
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

<script setup lang="ts">
import { ref, computed } from 'vue'
import CheckMark from '@/components/CheckMark.vue'
import ActionButton from '@/components/ActionButton.vue'
import ActionItem from '@/components/ActionItem.vue'
import SideBarHeader from '@/components/SideBarHeader.vue'
import { useDefaultStore, ActionGroup, ActionCategory } from '@/store'
import { storeToRefs } from 'pinia'

type ActCatKey = keyof ActionCategory

// data
const query = ref('')
const selectedActions = ref<Array<ActionGroup>>([])
const store = useDefaultStore()
const { ALL_ACTIONS } = storeToRefs(store)

// computed
const list = computed(() => {
  const result: ActionCategory = {}

  for (let actCategoryName in ALL_ACTIONS.value) {
    for (let actGroup of ALL_ACTIONS.value[actCategoryName as ActCatKey]) {
      const { name, isConfirmed } = actGroup
      const str = query.value.toLowerCase()

      if (name.search(str) >= 0 && !isConfirmed) {
        if (actCategoryName in result) {
          result[actCategoryName as ActCatKey].push(actGroup)
        } else {
          result[actCategoryName as ActCatKey] = [actGroup]
        }
      }
    }

  }
  return result
})

// methods
function mark(isAdded: boolean, actGroup: ActionGroup) {
  if (isAdded) {
    selectedActions.value.push(actGroup)
  } else {
    const index = selectedActions.value.findIndex(actItem => actItem.name == actGroup.name)
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

  &__header {
    color: #475461;
  }

  &__content {
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
    margin-inline-start: 16px;
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