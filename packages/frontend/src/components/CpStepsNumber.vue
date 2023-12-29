<template>
  <p class="cp-steps-number">
    Etapa <span class="cp-steps-number__count">{{ count }}</span> de 4
  </p>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['count'])
</script>

<style scoped>
.cp-steps-number__count {
  color: #ff9900;
}
</style>
