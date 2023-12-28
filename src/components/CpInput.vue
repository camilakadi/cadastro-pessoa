<template>
  <div class="cp-input">
    <label class="cp-input__label">{{ label }}</label>
    <input class="cp-input__input" v-model="inputValue" @input="emitInput" />
  </div>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue'

const props = defineProps(['label', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue)

const emitInput = () => {
  emit('update:modelValue', inputValue.value)
}

watch(
  () => {
    inputValue.value = props.modelValue
  },
  { immediate: true }
)
</script>

<style scoped>
.cp-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.cp-input__label {
  color: #000;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;
}

.cp-input__input {
  padding: 12px;
  border-radius: 8px;
}
</style>
