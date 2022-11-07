<template>
  <div class="pa-2">
    <div>
      <h3>Colored</h3>
      <div class="text-center">
        <v-chip class="ma-2"> Default </v-chip>

        <v-chip class="ma-2" color="primary"> Primary </v-chip>

        <v-chip class="ma-2" color="secondary"> Secondary </v-chip>

        <v-chip class="ma-2" color="error" text-color="white">
          Red Chip
        </v-chip>

        <v-chip class="ma-2" color="grey" text-color="white">
          Green Chip
        </v-chip>
      </div>
    </div>

    <div>
      <h3>Label</h3>
      <div class="text-center">
        <v-chip class="ma-2" label> Label </v-chip>

        <v-chip class="ma-2" color="error" label text-color="white">
          <v-icon start :icon="mdiLabel"></v-icon>
          Tags
        </v-chip>

        <v-chip class="ma-2" color="primary" label>
          <v-icon start :icon="mdiAccountCircleOutline"></v-icon>
          John Leider
        </v-chip>

        <v-chip class="ma-2" closable color="info" label>
          <v-icon start :icon="mdiTwitter"></v-icon>
          New Tweets
          <v-icon end :icon="mdiTwitter"></v-icon>
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiLabel, mdiAccountCircleOutline, mdiTwitter } from "@mdi/js";
</script>

<style scoped></style>
