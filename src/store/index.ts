import { defineStore } from 'pinia'
import { ref } from 'vue'

class ActionGroup {
  inactive: Boolean = false
  list: Array<object> = []
}

export const useDefaultStore = defineStore('default', () => {
  const AssignedActions = ref({})

  function confirmActions(actions: Array<string>) {
    console.log('actions')
    for(let action of actions) {
      AssignedActions.value[action] = new ActionGroup()
    }
  }

  return {
    confirmActions,
    AssignedActions
  }
})