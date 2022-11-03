<template>
  <v-layout ref="layoutRef">
    <v-navigation-drawer
      color="grey-darken-2"
      permanent
      name="my-drawer"
    ></v-navigation-drawer>

    <v-app-bar
      color="grey-lighten-2"
      elevation="0"
      :order="order"
      name="my-app-bar"
    ></v-app-bar>

    <v-main>
      <v-card height="200px" class="d-flex justify-center align-center">
        <v-switch
          v-model="order"
          true-value="-1"
          false-value="0"
          label="Toggle order"
        ></v-switch>
        <v-btn size="medium" @click="print('my-app-bar')">
          print my app bar
        </v-btn>

        <v-btn size="medium" @click="print('my-drawer')">
          print my drawer
        </v-btn>
      </v-card>
      <slot />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import type { VLayout } from "vuetify/components";

const order = ref(0);

const layoutRef = ref<VLayout>(null!);

function print(name: string) {
  alert(JSON.stringify(layoutRef.value.getLayoutItem(name), null, 2));
}
</script>
