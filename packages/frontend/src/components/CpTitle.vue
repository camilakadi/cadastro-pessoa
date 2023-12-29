<template>
  <h2 class="cp-title">{{ title }}</h2>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['title'])
</script>

<style scoped>
.cp-title {
  font-size: 30px;
  color: #000;
  font-weight: bold;
  margin-bottom: 24px;
}
</style>
