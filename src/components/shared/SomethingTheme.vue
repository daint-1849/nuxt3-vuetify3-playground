<template>
  <div>
    <div class="d-flex d-md-block">
      <div>ok1</div>
      <div>ok2</div>
    </div>
    <div class="bg-something on-something">
      background color with appropriate text color contrast
    </div>
    <div class="text-something">text color</div>
    <div class="border-something">border color</div>
    <p class="custom-class">custom class</p>
    <br />

    <div class="text-primary">text color</div>

    <div class="text-primary-lighten-1">text color</div>

    <div class="text-primary-darken-1">text color</div>

    <div class="text-primary-darken-2">text color</div>

    <div>
      <div value="rounded-sm" class="rounded-sm bg-primary">text</div>
      <div value="rounded" class="rounded bg-primary">text</div>
      <div value="rounded-md" class="rounded-md bg-primary">text</div>
      <div value="rounded-lg" class="rounded-lg bg-primary">text</div>
      <div value="rounded-xl" class="rounded-xl bg-primary">text</div>
      <div value="rounded-pill" class="rounded-pill bg-primary">text</div>
      <div value="rounded-circle" class="rounded-circle bg-primary">text</div>
      <div value="rounded-shaped" class="rounded-shaped bg-primary">text</div>
    </div>

    <div class="d-flex justify-space-around">
      <div class="pa-4 bg-secondary rounded-t-xl">.rounded-t-xl</div>

      <div class="pa-4 bg-secondary rounded-b-xl">.rounded-b-xl</div>

      <div class="pa-4 bg-secondary rounded-s-xl">.rounded-s-xl</div>

      <div class="pa-4 bg-secondary rounded-e-xl">.rounded-e-xl</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.custom-class {
  background-color: rgb(var(--v-theme-something));
  color: rgba(var(--v-theme-something), 0.7);
}

.my-button {
}
</style>
