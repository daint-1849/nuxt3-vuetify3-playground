<template>
  <VContainer fluid class="bg-white">
    <VRow>
      <VCol cols="12">
        <VCombobox
          v-model="select1"
          :items="items1"
          label="Combobox 1"
          multiple
          dense
          variant="outlined"
        ></VCombobox>
      </VCol>
      <VCol cols="12">
        <VCombobox
          v-model="select2"
          :items="items1"
          label="Combobox 1"
          dense
          variant="outlined"
        ></VCombobox>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
const items1 = ["Vuetify3", "Nuxt3", "Vue3"];
const select1 = ref(["Vuetify3"]);
const select2 = ref("Vuetify3");
</script>

<style scoped></style>
