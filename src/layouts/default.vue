<template>
  <v-app>
    <v-app-bar color="grey-lighten-2" height="30"></v-app-bar>
    <v-navigation-drawer
      color="grey-darken-2"
      permanent
      width="76"
    ></v-navigation-drawer>
    <!-- <v-app-bar height="48" color="grey" elevation="0"></v-app-bar>
    <v-navigation-drawer
      location="right"
      width="150"
      color="grey-lighten-1"
      permanent
    ></v-navigation-drawer> -->

    <!-- <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <v-app-bar color="grey-lighten-2"></v-app-bar> -->

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
