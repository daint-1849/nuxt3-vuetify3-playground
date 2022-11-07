<template>
  <button type="button"><slot /></button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: any;
    primary?: boolean;
  }>(),
  {
    color: undefined,
    primary: false,
  }
);
</script>

<style scoped></style>
