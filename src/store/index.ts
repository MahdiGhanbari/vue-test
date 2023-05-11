import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ActionCategory {
  [key: string]: Array<ActionGroup>
}
export class ActionGroup {
  inactive: boolean = false
  isConfirmed: boolean = false
  name: string
  icon: string | undefined
  list: Array<object> = []

  constructor(name: string, icon?: string) {
    this.name = name
    this.icon = icon
  }

  public changeState() {
    this.inactive = !this.inactive
  }
}

export const useDefaultStore = defineStore('default', () => {
  // state
  const assignedActions = ref<Array<ActionGroup>>([])
  const selectedAction = ref<ActionGroup | undefined>()
  const ALL_ACTIONS = ref<ActionCategory>({
    'Native Popup actions': [
      new ActionGroup('Tag customer', 'fa-solid fa-user-tag'),
      new ActionGroup('Tag order', 'fas fa-thin fa-tag'),
      new ActionGroup('Send email notification', 'fa-regular fa-envelope'),
      new ActionGroup('Select digital product', "fa-solid fa-file-circle-check"),
      new ActionGroup('Make HTTPS request', 'fa-solid fa-shield')
    ],
    'Integrations with other apps': [
      new ActionGroup('Send data to Google Sheet', 'fa-brands fa-google-drive')
    ]
  })

  // actions
  function confirmActions(actions: Array<ActionGroup>) {
    actions.forEach(act => act.isConfirmed = true)
    assignedActions.value.push(...actions)
    // TODO: makea backup of assigned actions
  }
  function removeSelectedAction() {
    const { name } = selectedAction.value || {}
    const index = assignedActions.value.findIndex(act => act.name == name)
    if (index > -1) {
      const removedAct: ActionGroup = assignedActions.value.splice(index, 1)[0]
      removedAct.isConfirmed = false
    }
  }

  // getters
  const hasAssignedAct = computed(() => {
    const count = Object.keys(assignedActions.value).length
    return count > 0
  })

  return {
    confirmActions,
    removeSelectedAction,
    selectedAction,
    assignedActions,
    hasAssignedAct,
    ALL_ACTIONS
  }
})