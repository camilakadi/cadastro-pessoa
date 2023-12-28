<template>
  <div class="cp-step-four">
    <CpStepsNumber count="4" />

    <CpTitle title="Revise suas informações" />

    <form>
      <CpInput label="Endereço de e-mail" v-model="emailAddress" type="email" />

      <CpInput label="Nome" v-model="name" type="text" />

      <CpInput label="CPF" v-model="cpf" type="text" />

      <CpInput label="Data de nascimento" v-model="bornDate" type="date" />

      <CpInput label="Telefone" v-model="phone" type="text" />

      <CpInput label="Sua senha" v-model="password" type="password" />

      <div class="cp-step-four__buttons">
        <CpButton text="Voltar" buttonClass="outlined" />
        <CpButton text="Continuar" buttonClass="contained" />
      </div>
    </form>
  </div>
</template>

<script setup>
import CpInput from '@/components/CpInput.vue';
import CpTitle from '@/components/CpTitle.vue';
import CpStepsNumber from '@/components/CpStepsNumber.vue';
import CpButton from '@/components/CpButton.vue';
</script>

<style scoped>
.cp-step-four__buttons {
  display: grid;
  gap: 20px;
  grid-template-columns: auto 1fr;
}
</style>
