<template>
  <div class="cp-step-two">
    <CpStepsNumber count="2" />

    <CpTitle title="Pessoa Física" />

    <form @submit.prevent="handleContinue">
      <CpInput label="Nome" v-model="name" />

      <CpInput label="CPF" v-model="cpf" />

      <CpInput label="Data de nascimento" v-model="bornDate" />

      <CpInput label="Telefone" v-model="phone" />

      <div class="cp-step-two__buttons">
        <CpButton :type="button" text="Voltar" buttonClass="outlined" :clickEvent="previousStep" />
        <CpButton
          :type="submit"
          text="Continuar"
          buttonClass="contained"
          :clickEvent="handleContinue"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import CpInput from '@/components/CpInput.vue'
import CpTitle from '@/components/CpTitle.vue'
import CpStepsNumber from '@/components/CpStepsNumber.vue'
import CpButton from '@/components/CpButton.vue'

const props = defineProps(['currentStep', 'nextStep', 'previousStep'])

const handleContinue = () => {
  props.nextStep()
}
</script>

<style scoped>
.cp-step-two__buttons {
  display: grid;
  gap: 20px;
  grid-template-columns: auto 1fr;
}
</style>
