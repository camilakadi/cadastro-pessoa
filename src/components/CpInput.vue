<template>
  <div class="cp-input" :class="{ 'cp-input--error': isError }">
    <label class="cp-input__label" :for="inputId">{{ label }}</label>
    <input
      :type="type"
      :id="inputId"
      class="cp-input__input"
      v-model="inputValue"
      @input="emitInput"
      v-maska
      :data-maska="maskPattern"
    />

    <div v-show="isError" class="cp-input__message">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { vMaska } from 'maska';
import { ref, defineProps, watchEffect, defineEmits, computed } from 'vue';

const props = defineProps({
  label: String,
  modelValue: String,
  type: String,
  id: String,
  for: String,
  required: Boolean,
  minLenght: String,
  errorMessage: String,
  maskPattern: String
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);
const inputId = ref(`input-${Math.random().toString(36).substring(7)}`);
const isError = ref(false);

const emitInput = () => {
  validateInput();
  emit('update:modelValue', inputValue.value);
};

const validateInput = () => {
  if (!props.errorMessage) {
    return;
  }

  if (props.required && !inputValue.value) {
    isError.value = true;
    return;
  }

  if (props.minLenght && inputValue.value.length < props.minLenght) {
    isError.value = true;
    return;
  }

  isError.value = false;
  return;
};

const maskPattern = computed(() => props.maskPattern || null);

watchEffect(() => {
  inputValue.value = props.modelValue;
});

watchEffect(() => {
  isError.value = Boolean(props.errorMessage);
});
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

.cp-input__message {
  height: 24px;
  color: var(--red);
}

.cp-input--error .cp-input__input {
  border: 2px solid var(--red);
}

.cp-input--error .cp-input__label {
  color: var(--red);
}
</style>
