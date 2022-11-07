<template>
  <div>
    <h3>Basic</h3>
    <VContainer id="input-usage" class="bg-white">
      <VRow>
        <VCol cols="12">
          <VInput
            :append-icon="mdiClose"
            :prepend-icon="mdiPhone"
            :messages="messages"
          >
            Default Slot
          </VInput>
        </VCol>
      </VRow>
    </VContainer>

    <h3>Error</h3>
    <VContainer id="input-usage" class="bg-white">
      <VRow>
        <VCol cols="12">
          <VInput
            :max-errors="2"
            :error-messages="['Fatal error', 'Another error', 'Xxx error']"
            error
          >
            Default Slot
          </VInput>
        </VCol>
        <VCol cols="12">
          <VInput
            :max-errors="2"
            :error-messages="['Fatal error', 'Another error', 'Xxx error']"
            error
            disabled
          >
            Default Slot
          </VInput>
        </VCol>
        <VCol cols="12">
          <VTextField label="Input 1" hide-details="auto" :rules="input1Rules">
          </VTextField>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup lang="ts">
import { mdiClose, mdiPhone } from "@mdi/js";

const messages = ["Message 1", "Message 2"];
const input1Rules = [
  (value: string) => !!value || "Required.",
  (value: string) => value.length >= 3 || "Min 3 characters.",
];
</script>

<style lang="scss">
#input-usage {
  .v-input {
    &__prepend,
    &__control,
    &__append,
    &__details > .v-messages {
      border: 1px dashed rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
