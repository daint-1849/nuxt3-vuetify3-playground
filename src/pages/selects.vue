<template>
  <div>
    <VContainer class="bg-white">
      <VRow>
        <VCol cols="12">
          <VSelect
            v-model="select"
            :hint="`${select.state}, ${select.abbr}`"
            :items="items"
            item-title="state"
            item-value="abbr"
            label="Select"
            persistent-hint
            return-object
            single-line
          ></VSelect>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup lang="ts">
const select = ref({ state: "Florida", abbr: "FL" });
const items = [
  { state: "Florida", abbr: "FL" },
  { state: "Georgia", abbr: "GA" },
  { state: "Nebraska", abbr: "NE" },
  { state: "California", abbr: "CA" },
  { state: "New York", abbr: "NY" },
];
</script>

<style scoped></style>
