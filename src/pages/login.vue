<template>
  <div class="py-4">
    <v-img
      class="mx-auto mb-10"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-high-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        :prepend-inner-icon="mdiEmailOutline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-high-emphasis d-flex align-center justify-space-between"
      >
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        :append-inner-icon="visible ? mdiEyeOff : mdiEye"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        :prepend-inner-icon="mdiLockOutline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will
          be temporarily locked for three hours. If you must login now, you can
          also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn block class="mb-8" color="primary" size="large" variant="tonal">
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-primary text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon :icon="mdiChevronRight"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {
  mdiEmailOutline,
  mdiEye,
  mdiEyeOff,
  mdiLockOutline,
  mdiChevronRight,
} from "@mdi/js";
const visible = ref(false);
</script>

<style scoped></style>
