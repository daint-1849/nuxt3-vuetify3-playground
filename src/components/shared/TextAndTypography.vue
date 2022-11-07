<template>
  <div>
    <div class="text-h1">Heading 1</div>
    <div class="text-h2">Heading 2</div>
    <div class="text-h3">Heading 3</div>
  </div>

  <div>
    <p class="font-weight-black">Black text.</p>
    <p class="font-weight-bold">Bold text.</p>
    <p class="font-weight-medium">Medium weight text.</p>
    <p class="font-weight-regular">Normal weight text.</p>
    <p class="font-weight-light">Light weight text.</p>
    <p class="font-weight-thin">Thin weight text.</p>
    <p class="font-italic">Italic text.</p>
  </div>

  <div class="d-flex justify-space-between flex-row">
    <a href="#" class="text-decoration-none">Non-underlined link</a>

    <div class="text-decoration-line-through">Line-through text</div>

    <div class="text-decoration-overline">Overline text</div>

    <div class="text-decoration-underline">Underline text</div>
  </div>

  <div>
    <span class="d-block text-truncate" style="max-width: 150px">
      Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
      tellus.
    </span>
    <span class="d-inline-block text-truncate" style="max-width: 150px">
      Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
      tellus.
    </span>
    <span class="d-flex text-truncate" style="max-width: 150px">
      Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
      tellus.
    </span>
    <span class="d-inline-flex text-truncate" style="max-width: 150px">
      Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
      tellus.
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
