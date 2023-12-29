<template>
  <div class="cp-radio" :class="{ 'cp-radio--error': isError }">
    <div class="cp-radio_input-container">
      <div v-for="(option, index) in options" :key="index" class="cp-radio__input">
        <input
          type="radio"
          :id="option.id"
          :name="option.id"
          :value="option.value"
          v-model="selectedOption"
          @change="emitInput"
        />

        <label :for="option.id">{{ option.label }}</label>
      </div>
    </div>

    <div v-show="isError" class="cp-radio__message">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { ref, defineProps, watchEffect, defineEmits } from 'vue';

const props = defineProps({
  options: Array,
  label: String,
  modelValue: String,
  required: Boolean,
  errorMessage: String
});

const emit = defineEmits(['update:modelValue']);

const selectedOption = ref(props.modelValue);
const isError = ref(false);

const emitInput = () => {
  isError.value = false;
  emit('update:modelValue', selectedOption.value);
};

watchEffect(() => {
  selectedOption.value = props.modelValue;
});

watchEffect(() => {
  isError.value = Boolean(props.errorMessage);
});
</script>

<style scoped>
.cp-radio {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.cp-radio_input-container {
  display: flex;
  flex-direction: row;
}

.cp-radio__input {
  margin-right: 12px;
}

.cp-radio__input input {
  margin-right: 8px;
}

.cp-radio__message {
  height: 24px;
  color: var(--red);
}

.cp-radio--error .cp-radio__message {
  color: var(--red);
}
</style>
