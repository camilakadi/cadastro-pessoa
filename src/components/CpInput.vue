<template>
  <div class="cp-input">
    <label class="cp-input__label" :for="inputId">{{ label }}</label>
    <input
      :type="type"
      class="cp-input__input"
      v-model="inputValue"
      @input="emitInput"
      :id="inputId"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';

const props = defineProps({
  label: String,
  modelValue: String,
  type: String,
  id: String,
  for: String,
  required: Boolean
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);
const inputId = ref(`input-${Math.random().toString(36).substring(7)}`);

const emitInput = () => {
  emit('update:modelValue', inputValue.value);
};

watch(
  () => {
    inputValue.value = props.modelValue;
  },
  { immediate: true }
);
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
