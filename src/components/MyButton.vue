<template>
  <button type="button"><slot /></button>
</template>

<script setup lang="ts">
import isString from "@/utils/isString";

const props = withDefaults(
  defineProps<{
    color?: any;
    size?: "small" | "medium" | "large";
  }>(),
  {
    color: undefined,
    size: "medium",
  }
);

if (isString(props.color)) {
  console.log(props.color.includes("#"));
}
</script>

<style scoped></style>
