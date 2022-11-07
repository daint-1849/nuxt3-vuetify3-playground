<template>
  <VContainer class="pa-6" fluid>
    <v-row justify="center">
      <v-menu transition="slide-x-transition">
        <template #activator="{ props }">
          <v-btn color="primary" class="ma-2" v-bind="props">
            Slide X Transition
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="mx-6 hidden-sm-and-down"></div>

      <v-menu transition="scroll-y-transition">
        <template #activator="{ props }">
          <v-btn color="secondary" class="ma-2" v-bind="props">
            Scroll Y Transition
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <div class="text-center">
      <v-menu transition="scale-transition" origin="center center">
        <template #activator="{ props }">
          <CustomVButton dark color="primary" v-bind="props">
            Scale Transition
          </CustomVButton>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </VContainer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
