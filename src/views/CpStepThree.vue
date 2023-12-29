<template>
  <div class="cp-step-two">
    <CpStepsNumber count="3" />

    <CpTitle title="Senha de acesso" />

    <form @submit.prevent="handleFormSubmit">
      <CpInput
        label="Sua senha"
        v-model="formData.password"
        type="password"
        :error-message="errorMessages.password"
      />

      <div class="cp-step-two__buttons">
        <CpButton text="Voltar" buttonClass="outlined" :clickEvent="previousStep" />
        <CpButton type="submit" text="Continuar" buttonClass="contained" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CpInput from '@/components/CpInput.vue';
import CpTitle from '@/components/CpTitle.vue';
import CpStepsNumber from '@/components/CpStepsNumber.vue';
import CpButton from '@/components/CpButton.vue';

const props = defineProps({
  nextStep: Function,
  previousStep: Function,
  formAllData: Object
});

const formAllData = props.formAllData;

const formData = ref({
  password: formAllData.password
});

const errorMessages = ref({
  password: ''
});

const handleFormSubmit = () => {
  const passwordValid = validatePassword();

  if (!passwordValid) return;

  props.nextStep(formData.value);
};

const validatePassword = () => {
  if (!formData.value.password) {
    errorMessages.value.password = 'Campo obrigatório';
    return false;
  }

  errorMessages.value.password = '';
  return true;
};
</script>

<style scoped>
.cp-step-two__buttons {
  display: grid;
  gap: 20px;
  grid-template-columns: auto 1fr;
}
</style>
