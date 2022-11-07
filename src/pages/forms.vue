<template>
  <VForm ref="myFormRef" v-model="valid">
    <VContainer class="bg-white">
      <VRow>
        <VCol cols="12">
          <VTextField
            v-model="firstName"
            :counter="10"
            label="First name"
            required
            :rules="rules.name"
          ></VTextField>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <VTextField
            v-model="lastName"
            :counter="10"
            label="Last name"
            required
            :rules="rules.name"
          ></VTextField>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <VTextField
            v-model="email"
            :counter="10"
            label="Email"
            required
            :rules="rules.email"
          ></VTextField>
        </VCol>
      </VRow>

      <VRow>
        <VCol cols="12">
          <VBtn color="success" class="mr-4" @click="validate"> Validate </VBtn>

          <VBtn color="error" class="mr-4" @click="reset"> Reset Form </VBtn>

          <VBtn color="warning" @click="resetValidation">
            Reset Validation
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VForm>
</template>

<script setup lang="ts">
import type { VForm } from "vuetify/components/VForm";
import type { VTextField } from "vuetify/components/VTextField";

const myFormRef = ref<VForm | null>(null);
const valid = ref(false);
const firstName = ref("");
const lastName = ref("");
const email = ref("");

const rules: Record<
  "name" | "email",
  NonNullable<VTextField["$props"]["rules"]>
> = {
  name: [
    (value: string) => !!value || "Name is required",
    (value: string) =>
      value.length <= 10 || "Name must be less than 10 characters",
  ],
  email: [
    (value: string) => !!value || "Email is required",
    (value: string) => /.+@.+/.test(value) || "Email must be valid",
    (value: string) =>
      value.length <= 10 || "Email must be less than 10 characters",
  ],
};

async function validate() {
  if (!myFormRef.value) return;

  if ((await myFormRef.value.validate()).valid) {
    alert("Form is valid");
  }
}

function reset() {
  if (!myFormRef.value) return;

  myFormRef.value.reset();
}

function resetValidation() {
  if (!myFormRef.value) return;

  myFormRef.value.resetValidation();
}

onMounted(() => {
  console.log(myFormRef.value);
});
</script>

<style scoped></style>
