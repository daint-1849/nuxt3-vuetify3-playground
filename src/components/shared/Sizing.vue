<template>
  <div>
    <div>
      <h2>Height</h2>
      <div
        v-for="h in heights"
        :key="h"
        class="bg-grey"
        :class="`h-${h}`"
        style="border: 1px solid rgb(var(--v-theme-error))"
      >
        {{ h }}
      </div>
    </div>
    <br />
    <div>
      <h2>Width</h2>
      <div
        v-for="w in widths"
        :key="w"
        class="bg-grey"
        :class="`w-${w}`"
        style="border: 1px solid rgb(var(--v-theme-error))"
      >
        {{ w }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heights = ["auto", "screen", "0", "25", "50", "75", "100"];
const widths = ["auto", "0", "25", "50", "75", "100"];
</script>
