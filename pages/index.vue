<template>
  <div>
    <v-alert
      class="ma-2"
      title="Alert title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
      type="success"
      variant="outlined"
      closable
    ></v-alert>

    <br />

    <v-alert type="success">I'm a success alert.</v-alert>

    <br />

    <v-alert type="info">I'm an info alert.</v-alert>

    <br />

    <v-alert type="warning">I'm a warning alert.</v-alert>

    <br />

    <v-alert type="error">I'm an error alert.</v-alert>

    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>
