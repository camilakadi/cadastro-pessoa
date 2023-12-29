<template>
  <div class="cp-step-four">
    <CpStepsNumber count="4" />

    <CpTitle title="Revise suas informações" />

    <form @submit.prevent="handleFormSubmit">
      <CpInput
        label="Endereço de e-mail"
        v-model="formData.emailAddress"
        type="email"
        :error-message="errorMessages.emailAddress"
        required
      />

      <CpInput
        label="Razão social"
        v-model="formData.socialReason"
        type="text"
        :error-message="errorMessages.socialReason"
        required
      />

      <CpInput
        label="CNPJ"
        v-model="formData.cnpj"
        type="text"
        :error-message="errorMessages.cnpj"
        required
      />

      <CpInput
        label="Data de abertura"
        v-model="formData.openingDate"
        type="date"
        :error-message="errorMessages.openingDate"
        required
      />

      <CpInput
        label="Telefone"
        v-model="formData.phone"
        type="text"
        :error-message="errorMessages.phone"
        required
      />

      <CpInput
        label="Sua senha"
        v-model="formData.password"
        type="password"
        :error-message="errorMessages.password"
        required
      />

      <div class="cp-step-four__buttons">
        <CpButton text="Voltar" buttonClass="outlined" :clickEvent="previousStep" />
        <CpButton text="Continuar" buttonClass="contained" />
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
  previousStep: Function
});

const formData = ref({
  emailAddress: '',
  name: '',
  cpf: '',
  bornDate: '',
  phone: '',
  password: ''
});

const errorMessages = ref({
  emailAddress: '',
  name: '',
  cpf: '',
  bornDate: '',
  phone: '',
  password: ''
});

const handleFormSubmit = () => {
  const emailValid = validateEmail();
  const socialReasonValid = validateSocialReason();
  const cnpjValid = validateCnpj();
  const openingDateValid = validateOpeningDate();
  const phoneValid = validatePhone();
  const passwordValid = validatePassword();

  if (
    !emailValid ||
    !socialReasonValid ||
    !cnpjValid ||
    !openingDateValid ||
    !phoneValid ||
    !passwordValid
  )
    return;

  props.nextStep();
};

const validateEmail = () => {
  if (!formData.value.emailAddress) {
    errorMessages.value.emailAddress = 'Campo obrigatório';
    return false;
  }

  errorMessages.value.emailAddress = '';
  return true;
};

const validateSocialReason = () => {
  if (!formData.value.name) {
    errorMessages.value.name = 'Campo obrigatório';
    return false;
  }

  errorMessages.value.name = '';
  return true;
};

const validateCnpj = () => {
  if (!formData.value.cnpj) {
    errorMessages.value.cnpj = 'Campo obrigatório';
    return false;
  }

  errorMessages.value.cnpj = '';
  return true;
};

const validateOpeningDate = () => {
  if (!formData.value.openingDate) {
    errorMessages.value.openingDate = 'Campo obrigatório';
    return false;
  }

  errorMessages.value.openingDate = '';
  return true;
};

const validatePhone = () => {
  if (!formData.value.phone) {
    errorMessages.value.phone = 'Campo obrigatório';
    return false;
  }

  errorMessages.value.phone = '';
  return true;
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
.cp-step-four__buttons {
  display: grid;
  gap: 20px;
  grid-template-columns: auto 1fr;
}
</style>
