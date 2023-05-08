<template>
  <div class="action-item" :class="{'is-inactive': disabled}">
    <div @click="e => $emit('click:prepend', e)">
      <slot name="prepend:icon">
        <v-icon v-if="prependIcon" :class="prependIcon" size="24"/>
        <v-icon v-else-if="name" :class="getIcon(name)" size="24"/>
      </slot>
    </div>
    <div class="action-item__content"><slot>{{ name }}</slot></div>
    <div @click="e => $emit('click:append', e)">
      <slot name="append:icon">
        <v-icon v-if="appendIcon" :class="appendIcon" size="24"/>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { propsToAttrMap } from '@vue/shared';

const ACTION_ICONS = {
  'tag customer': 'fa-solid fa-user-tag',
  'tag order': 'fas fa-thin fa-tag',
  'send email notification': 'fa-regular fa-envelope',
  'select digital product': "fa-solid fa-file-circle-check",
  'make https request': 'fa-solid fa-shield',
  'send data to google sheet': 'fa-brands fa-google-drive'
}
type ICON_KEY = keyof typeof ACTION_ICONS

defineProps({
  appendIcon: String,
  prependIcon: String,
  disabled: Boolean,
  name: String
})
defineEmits(['click:prepend', 'click:append'])

function getIcon(name: String) {
  return ACTION_ICONS[name as ICON_KEY]
}
</script>

<style scoped lang="scss">
.action-item {
  padding: 16px;
  line-height: 19px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: #475461;
  cursor: pointer;
  &__content {
    flex: 1;
    margin-inline: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  &:hover {
    background-color: #F2F2F3;
  }
}
</style>