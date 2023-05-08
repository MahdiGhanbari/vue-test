import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export class ActionGroup {
  inactive: boolean = false
  list: Array<object> = []
}

export interface ActionCategory{
  [key: string]: ActionGroup
}

export const useDefaultStore = defineStore('default', () => {
  const assignedActions = ref<ActionCategory>({})

  function confirmActions(actions: Array<string>) {
    for(let action of actions) {
      assignedActions.value[action] = new ActionGroup()
    }
  }

  const hasAssignedAct = computed(()=> {
    const count = Object.keys(assignedActions.value).length
    return count > 0
  })

  return {
    confirmActions,
    assignedActions,
    hasAssignedAct
  }
})