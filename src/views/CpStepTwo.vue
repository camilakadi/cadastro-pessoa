<template>
  <div class="cp-step-two">
    <CpStepsNumber count="2" />

    <CpTitle title="Pessoa Física" />

    <form @submit.prevent="handleFormSubmit">
      <CpInput label="Nome" v-model="formData.name" :error-message="errorMessages.name" required />

      <CpInput
        label="CPF"
        v-model="formData.cpf"
        :error-message="errorMessages.cpf"
        mask-pattern="###.###.###-##"
        min-lenght="14"
        required
      />

      <CpInput
        label="Data de nascimento"
        v-model="formData.bornDate"
        :error-message="errorMessages.bornDate"
        type="date"
        required
      />

      <CpInput
        label="Telefone"
        v-model="formData.phone"
        type="tel"
        :error-message="errorMessages.phone"
        mask-pattern="(##) #####-####"
        min-lenght="15"
        required
      />

      <div class="cp-step-two__buttons">
        <CpButton
          type="button"
          text="Voltar"
          buttonClass="outlined"
          :clickEvent="handlePreviousStep"
        />
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
  name: formAllData.name,
  cpf: formAllData.cpf,
  bornDate: formAllData.bornDate,
  phone: formAllData.phone
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

  props.nextStep({ ...formData.value });
};

const handlePreviousStep = () => {
  props.previousStep({ ...formData.value });
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

  if (formData.value.cpf.length < 14) {
    errorMessages.value.cpf = 'O campo de CPF deve ter 11 dígitos';
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

  if (formData.value.phone.length < 15) {
    errorMessages.value.phone = 'O campo de telefone deve ter 11 dígitos';
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
