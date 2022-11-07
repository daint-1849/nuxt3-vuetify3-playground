<template>
  <div>
    <h3>Basics</h3>
    <VContainer fluid class="bg-white">
      <VRow>
        <VCol cols="12" sm="4" md="4">
          <VCheckbox
            v-model="ex4"
            label="Primary"
            color="primary"
            value="primary"
            hide-details
          ></VCheckbox>
          <VCheckbox
            v-model="ex4"
            label="Secondary"
            color="secondary"
            value="secondary"
            hide-details
          ></VCheckbox>
        </VCol>

        <VCol cols="12" sm="4" md="4">
          <VCheckbox
            v-model="ex4"
            label="Success"
            color="success"
            value="success"
            hide-details
          ></VCheckbox>
          <VCheckbox
            v-model="ex4"
            label="info"
            color="info"
            value="info"
            hide-details
          ></VCheckbox>
        </VCol>

        <VCol cols="12" sm="4" md="4">
          <VCheckbox
            v-model="ex4"
            label="Warning"
            color="warning"
            value="warning"
            hide-details
          ></VCheckbox>
          <VCheckbox
            v-model="ex4"
            label="Error"
            color="error"
            value="error"
            hide-details
          ></VCheckbox>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12" sm="4" md="4">
          <v-checkbox
            v-model="checkbox1"
            :label="`Checkbox 1: ${checkbox1.toString()}`"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="checkbox2"
            :label="`Checkbox 2: ${checkbox2.toString()}`"
            hide-details
          ></v-checkbox>
        </VCol>
      </VRow>
    </VContainer>

    <VDivider></VDivider>

    <h3>Slots</h3>
    <VContainer fluid class="bg-white">
      <VRow>
        <VCol cols="12">
          <VCheckbox v-model="checkbox3" hide-details>
            <template #label>
              <div>
                I agree that
                <VTooltip location="bottom left">
                  <template #activator="{ props }">
                    <a
                      target="_blank"
                      href="https://vuetifyjs.com"
                      v-bind="props"
                      @click.stop
                      >Vuetify</a
                    >
                  </template>
                  Opens in new window
                </VTooltip>
                is awesome
              </div>
            </template>
          </VCheckbox>
        </VCol>
      </VRow>
    </VContainer>

    <v-card>
      <v-card-text>
        <div class="d-flex pa-4">
          <v-checkbox-btn v-model="checkbox4" class="pr-2"></v-checkbox-btn>
          <v-text-field label="Include files" hide-details></v-text-field>
        </div>
        <div class="d-flex pa-4">
          <v-checkbox-btn v-model="checkbox5" class="pr-2"></v-checkbox-btn>
          <v-text-field
            :disabled="!checkbox5"
            hide-details
            label="I only work if you check the box"
          ></v-text-field>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const ex4 = ref([
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
]);

const checkbox1 = ref(false);
const checkbox2 = ref(true);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
</script>

<style scoped></style>
