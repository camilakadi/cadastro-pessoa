<template>
  <div class="cp-step-one">
    <CpStepsNumber count="1" />

    <CpTitle title="Seja bem vindo(a)" />

    <form @submit.prevent="handleFormSubmit">
      <CpInput
        type="email"
        label="Endereço de e-mail"
        v-model="emailAddress"
        for="emailAddress"
        :error-message="errorMessages.email"
        required
      />

      <CpRadio
        type="radio"
        v-model="selectedPersonType"
        :options="personTypeOptions"
        :error-message="errorMessages.personType"
      />

      <CpButton text="Continuar" buttonClass="contained" type="submit" fullWidth />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CpInput from '@/components/CpInput.vue';
import CpTitle from '@/components/CpTitle.vue';
import CpStepsNumber from '@/components/CpStepsNumber.vue';
import CpButton from '@/components/CpButton.vue';
import CpRadio from '@/components/CpRadio.vue';

const props = defineProps({
  nextStep: Function
});

const emailAddress = ref('');
const selectedPersonType = ref('');
const personTypeOptions = [
  { id: 'physicalPerson', label: 'Pessoa física', value: 'physicalPerson' },
  { id: 'legalPerson', label: 'Pessoa Jurídica', value: 'legalPerson' }
];

const errorMessages = ref({
  email: '',
  personType: ''
});

const handleFormSubmit = () => {
  const emailValid = validateEmail();
  const personTypeValid = validatePersonType();

  if (!emailValid || !personTypeValid) return;

  props.nextStep();
};

const validateEmail = () => {
  if (emailAddress.value === '') {
    errorMessages.value.email = 'O campo de e-mail é obrigatório';
    return false;
  }

  errorMessages.value.email = '';
  return true;
};

const validatePersonType = () => {
  if (selectedPersonType.value === '') {
    errorMessages.value.personType = 'O campo de tipo de pessoa é obrigatório';
    return false;
  }

  errorMessages.value.personType = '';
  return true;
};
</script>
