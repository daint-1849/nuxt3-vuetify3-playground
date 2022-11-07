<template>
  <v-container fluid>
    <v-radio-group v-model="radios">
      <template #label>
        <div>Your favourite <strong>search engine</strong></div>
      </template>
      <v-radio value="Google">
        <template #label>
          <div>Of course it's <strong class="text-success">Google</strong></div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo">
        <template #label>
          <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
        </template>
      </v-radio>
    </v-radio-group>
  </v-container>
</template>

<script setup lang="ts">
const radios = ref("Duckduckgo");
</script>

<style scoped></style>
