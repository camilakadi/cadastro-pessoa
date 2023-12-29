<template>
  <div class="cp-step-two">
    <CpStepsNumber count="2" />

    <CpTitle title="Pessoa Física" />

    <form @submit.prevent="handleFormSubmit">
      <CpInput
        label="Nome"
        v-model="formData.name"
        :error-message="errorMessages.name"
        minlength="10"
        required
      />

      <CpInput
        label="CPF"
        v-model="formData.cpf"
        :error-message="errorMessages.cpf"
        minlength="11"
        required
      />

      <CpInput
        label="Data de nascimento"
        v-model="formData.bornDate"
        :error-message="errorMessages.bornDate"
        minlength="3"
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
  name: '',
  cpf: '',
  bornDate: '',
  phone: ''
});

const errorMessages = ref({
  name: '',
  cpf: '',
  bornDate: '',
  phone: ''
});

const handleFormSubmit = () => {
  const nameValid = validateName();
  const cpfValid = validateCpf();
  const bornDateValid = validateBornDate();
  const phoneValid = validatePhone();

  if (!nameValid || !cpfValid || !bornDateValid || !phoneValid) return;

  props.nextStep();
};

const validateName = () => {
  if (formData.value.name === '') {
    errorMessages.value.name = 'O campo de nome é obrigatório';
    return false;
  }

  errorMessages.value.name = '';
  return true;
};

const validateCpf = () => {
  if (formData.value.cpf === '') {
    errorMessages.value.cpf = 'O campo de CPF é obrigatório';
    return false;
  }

  errorMessages.value.cpf = '';
  return true;
};

const validateBornDate = () => {
  if (formData.value.bornDate === '') {
    errorMessages.value.bornDate = 'O campo de data de nascimento é obrigatório';
    return false;
  }

  errorMessages.value.bornDate = '';
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
