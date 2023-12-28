<template>
  <div class="cp-step-two">
    <CpStepsNumber count="2" />

    <CpTitle title="Pessoa Física" />

    <form @submit.prevent="handleContinue">
      <CpInput label="Nome" v-model="formData.name" />

      <CpInput label="CPF" v-model="formData.cpf" />

      <CpInput label="Data de nascimento" v-model="formData.bornDate" />

      <CpInput label="Telefone" v-model="formData.phone" />

      <div class="cp-step-two__buttons">
        <CpButton text="Voltar" buttonClass="outlined" :clickEvent="previousStep" />
        <CpButton
          type="submit"
          text="Continuar"
          buttonClass="contained"
          :clickEvent="handleFormSubmit"
        />
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
  currentStep: Number,
  nextStep: Function,
  previousStep: Function
});

const formData = ref({
  name: '',
  cpf: '',
  bornDate: '',
  phone: ''
});

const handleFormSubmit = () => {
  if (
    !formData.value.name ||
    !formData.value.cpf ||
    !formData.value.bornDate ||
    !formData.value.phone
  )
    return;

  props.nextStep();
};
</script>

<style scoped>
.cp-step-two__buttons {
  display: grid;
  gap: 20px;
  grid-template-columns: auto 1fr;
}
</style>
