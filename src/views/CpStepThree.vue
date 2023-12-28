<template>
  <div class="cp-step-two">
    <CpStepsNumber count="2" />

    <CpTitle title="Senha de acesso" />

    <form>
      <CpInput label="Sua senha" v-model="password" type="password" />

      <div class="cp-step-two__buttons">
        <CpButton text="Voltar" buttonClass="outlined" />
        <CpButton text="Continuar" buttonClass="contained" />
      </div>
    </form>
  </div>
</template>

<script setup>
import CpInput from '@/components/CpInput.vue'
import CpTitle from '@/components/CpTitle.vue'
import CpStepsNumber from '@/components/CpStepsNumber.vue'
import CpButton from '@/components/CpButton.vue'
</script>

<style scoped>
.cp-step-two__buttons {
  display: grid;
  gap: 20px;
  grid-template-columns: auto 1fr;
}
</style>
