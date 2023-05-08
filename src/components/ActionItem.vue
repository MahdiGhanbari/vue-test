<template>
  <div class="action-item" :class="{disabled}">
    <div @click="e => $emit('click:prepend', e)">
      <slot name="prepend:icon">
        <v-icon v-if="prependIcon" :class="prependIcon" size="24"/>
      </slot>
    </div>
    <div class="action-item__content"><slot></slot></div>
    <div @click="e => $emit('click:append', e)">
      <slot name="append:icon">
        <v-icon v-if="appendIcon" :class="appendIcon" size="24"/>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  appendIcon: String,
  prependIcon: String,
  disabled: Boolean
})
defineEmits(['click:prepend', 'click:append'])
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
  
  &__content {
    flex: 1;
    margin-inline: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &:hover {
    background-color: #F2F2F3;
  }
}
.disabled {
  color: #C2CCD6;
  pointer-events: none;
}
</style>