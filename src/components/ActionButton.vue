<template>
  <button class="action-button" :class="[[type],{block}]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  outlined: Boolean,
  block: Boolean,
  type: {
    type: String,
    default: 'default',
    validator(value: string) {
      return ['primary', 'default'].includes(value)
    }
  }

})
</script>

<style scoped lang="scss">
.action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px 22px;
  border-radius: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.primary {
  background: #0052FF;
  color: #FFFFFF;
}
.default {
  background: #FFFFFF;
  color: #475461;
  border: 1px solid #E3E6E8;
}
.block {
  flex: 1;
}
</style>