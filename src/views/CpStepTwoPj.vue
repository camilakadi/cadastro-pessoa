<template>
  <div class="cp-step-two">
    <CpStepsNumber count="2" />

    <CpTitle title="Pessoa Jurídica" />

    <form @submit.prevent="handleFormSubmit">
      <CpInput
        label="Razão social"
        v-model="formData.socialReason"
        :error-message="errorMessages.socialReason"
        minlength="10"
        required
      />

      <CpInput
        label="CNPJ"
        v-model="formData.cnpj"
        :error-message="errorMessages.cnpj"
        minlength="11"
        required
      />

      <CpInput
        label="Data de abertura"
        v-model="formData.openingDate"
        :error-message="errorMessages.openingDate"
        minlength="3"
        type="date"
        required
      />

      <CpInput
        label="Telefone"
        v-model="formData.phone"
        :error-message="errorMessages.phone"
        minlength="8"
        required
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
  previousStep: Function
});

const formData = ref({
  socialReason: '',
  cnpj: '',
  openingDate: '',
  phone: ''
});

const errorMessages = ref({
  socialReason: '',
  cnpj: '',
  openingDate: '',
  phone: ''
});

const handleFormSubmit = () => {
  const nameValid = validateSocialReason();
  const cnpjValid = validateCnpj();
  const bornDateValid = validateOpeningDate();
  const phoneValid = validatePhone();

  if (!nameValid || !cnpjValid || !bornDateValid || !phoneValid) return;

  props.nextStep();
};

const validateSocialReason = () => {
  if (formData.value.socialReason === '') {
    errorMessages.value.socialReason = 'O campo de nome é obrigatório';
    return false;
  }

  errorMessages.value.socialReason = '';
  return true;
};

const validateCnpj = () => {
  if (formData.value.cnpj === '') {
    errorMessages.value.cnpj = 'O campo de CPF é obrigatório';
    return false;
  }

  errorMessages.value.cnpj = '';
  return true;
};

const validateOpeningDate = () => {
  if (formData.value.openingDate === '') {
    errorMessages.value.openingDate = 'O campo de data de abertura é obrigatório';
    return false;
  }

  errorMessages.value.openingDate = '';
  return true;
};

const validatePhone = () => {
  if (formData.value.phone === '') {
    errorMessages.value.phone = 'O campo de telefone é obrigatório';
    return false;
  }

  errorMessages.value.phone = '';
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
