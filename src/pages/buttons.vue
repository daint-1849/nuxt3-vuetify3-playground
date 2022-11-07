<template>
  <div>
    <h3>Variant</h3>
    <div class="d-flex justify-space-between pa-2">
      <v-btn>elevates (default)</v-btn>
      <v-btn variant="flat">flat</v-btn>
      <v-btn variant="tonal">tonal</v-btn>
      <v-btn variant="outlined">outlined</v-btn>
      <v-btn variant="text">text</v-btn>
      <v-btn variant="plain">plain</v-btn>
    </div>

    <h3>Block</h3>
    <div class="d-flex justify-space-between pa-2">
      <v-btn block>Block Button</v-btn>
    </div>

    <h3>Flat</h3>
    <div class="d-flex justify-space-between pa-2">
      <v-btn variant="flat"> Normal </v-btn>
      <v-btn variant="flat" color="grey"> Secondary </v-btn>
      <v-btn variant="flat" color="error"> Error </v-btn>
      <v-btn variant="flat" disabled> Disabled </v-btn>
    </div>

    <h3>Icon</h3>
    <div class="d-flex justify-space-between pa-2">
      <v-container fluid>
        <v-row justify="space-between" class="text-center">
          <v-col>
            <v-btn :icon="mdiHeart" v-once color="primary"></v-btn>
          </v-col>

          <v-col>
            <v-btn :icon="mdiStar" v-once color="secondary"></v-btn>
          </v-col>

          <v-col>
            <v-btn :icon="mdiCached" v-once color="info"></v-btn>
          </v-col>

          <v-col>
            <v-btn :icon="mdiThumbUp" v-once color="success"></v-btn>
          </v-col>
        </v-row>
        <v-row justify="space-between" class="text-center">
          <v-col>
            <v-btn icon color="primary">
              <v-icon :icon="mdiHeart"></v-icon>
            </v-btn>
          </v-col>

          <v-col>
            <v-btn icon color="secondary">
              <v-icon :icon="mdiStar"></v-icon>
            </v-btn>
          </v-col>

          <v-col>
            <v-btn icon color="info">
              <v-icon :icon="mdiCached"></v-icon>
            </v-btn>
          </v-col>

          <v-col>
            <v-btn icon color="success">
              <v-icon :icon="mdiThumbUp"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <h3>Loaders</h3>
    <div class="d-flex justify-space-between align-baseline pa-2">
      <v-btn
        :loading="loading[1]"
        :disabled="loading[1]"
        color="secondary"
        @click="load(1)"
      >
        Accept Terms
      </v-btn>

      <v-btn
        :loading="loading[2]"
        :disabled="loading[2]"
        color="grey"
        :prepend-icon="mdiCloudUpload"
        @click="load(2)"
      >
        Upload
      </v-btn>

      <v-btn
        :loading="loading[3]"
        :disabled="loading[3]"
        color="info"
        @click="load(3)"
      >
        Custom Loader
        <template #loader>
          <span class="custom-loader">
            <v-icon light :icon="mdiCached"></v-icon>
          </span>
        </template>
      </v-btn>

      <v-btn
        :loading="loading[4]"
        :disabled="loading[4]"
        color="grey"
        :icon="mdiCloudUpload"
        @click="load(4)"
      ></v-btn>
    </div>

    <h3>Outlined</h3>
    <div class="d-flex justify-space-between align-baseline pa-2">
      <v-btn variant="outlined" color="primary"> Outlined Button </v-btn>
      <v-btn variant="outlined" icon color="secondary">
        <v-icon :icon="mdiFormatListBulletedSquare"></v-icon>
      </v-btn>
      <v-btn variant="outlined" size="large" icon color="info">
        <v-icon :icon="mdiPencil"></v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  mdiHeart,
  mdiStar,
  mdiCached,
  mdiThumbUp,
  mdiCloudUpload,
  mdiFormatListBulletedSquare,
  mdiPencil,
} from "@mdi/js";

const loading = ref([false, false, false, false]);

function load(i: number) {
  loading.value[i] = true;
  setTimeout(() => (loading.value[i] = false), 2000);
}
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
