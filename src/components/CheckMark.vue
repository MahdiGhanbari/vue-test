<template>
  <div :style="{width: '24px', height: '24px'}" @click="change" class="check-mark" :class="{'is-checked': checked}">
    <i v-show="checked" class="fa fa-solid fa-check check-mark__icon"/>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
const checked = ref(false)

function change() {
  checked.value = !checked.value
  emit('update:modelValue', checked.value)
}

watch(
  () => props.modelValue,
  (v: boolean)=> checked.value = v,
  {immediate: true}
)
</script>

<style scoped lang="scss">
.is-checked {
  background: #0052FF;
  border: none;
}
.check-mark {
  position: relative;
  border: 1px solid #E3E6E8;
  border-radius: 8px;
  cursor: pointer;
  &__icon {
    color: #FFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>