<template>

  <!-- form -->
  <v-form @submit.prevent="addTag">
    <ActionItem class="add-box">
      <template #prepend:icon>
        <v-btn icon="fa-solid fa-plus" variant="text" density="compact" type="submit" />
      </template>
      <input v-model="label" class="add-box__input" type="text" placeholder="Add tag" />
    </ActionItem>
  </v-form>

  <!-- tags -->
  <div>
    <ActionItem v-for="tag of modelValue.tags" :key="tag.color" class="tag">
      <template #prepend:icon>
        <div class="tag__ellipse" :style="{ 'background-color': tag.color }"></div>
      </template>
      {{ tag.label }}
      <template #append:icon>
        <v-btn @click="modelValue.removeTag(tag)" icon="fa-regular fa-trash-can" variant="text" density="compact"
          size="20" color="#C2CCD6" />
      </template>
    </ActionItem>
  </div>
  <div>

  </div>

</template>

<script setup lang="ts">
import ActionItem from '../ActionItem.vue';
import { TagCustomer } from '@/store'
import { ref } from 'vue';

const props = defineProps<{ modelValue: TagCustomer }>()

// data
const label = ref('')

// methods
function addTag() {
  props.modelValue.addTag(label.value)
  label.value = ''
}
</script>


<style scoped lang="scss">
.add-box {
  border: 1px solid #E3E6E8;
  border-radius: 14px;
  padding: 14px;
  font-weight: 100;
  color: #9DA8B4;

  &__input {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #475461;
  }
}

.tag {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #475461;
  background: #F9F9F9;
  border-radius: 14px;
  margin-top: 14px;

  &__ellipse {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

}
</style>