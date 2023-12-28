<template>
  <div class="cp-input" :class="{ 'cp-input--error': isError }">
    <label class="cp-input__label" :for="inputId">{{ label }}</label>
    <input
      :type="type"
      class="cp-input__input"
      v-model="inputValue"
      @input="emitInput"
      :id="inputId"
    />
    <div v-if="isError" class="cp-input__message">{{ errorMessage }}</div>
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
  required: Boolean,
  errorMessage: String
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);
const inputId = ref(`input-${Math.random().toString(36).substring(7)}`);
const isError = ref(false);

const emitInput = () => {
  isError.value = false;
  emit('update:modelValue', inputValue.value);
};

watch(
  () => {
    inputValue.value = props.modelValue;
  },
  { immediate: true }
);

watch(
  () => {
    isError.value = Boolean(props.errorMessage);
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
  color: var(--black);
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;
}

.cp-input__input {
  padding: 12px;
  border-radius: 8px;
}

.cp-input--error .cp-input__input {
  border: 2px solid var(--red);
}

.cp-input--error .cp-input__message {
  color: var(--red);
}

.cp-input--error .cp-input__label {
  color: var(--red);
}
</style>
