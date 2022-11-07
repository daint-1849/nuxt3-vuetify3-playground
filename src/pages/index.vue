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

    <v-alert :type="alertType">I'm a {{ alertType }} alert.</v-alert>
    <!-- <v-icon icon="mdi-home" /> -->
    <IconAccount />

    <NuxtLink to="/about">About</NuxtLink>
    <br />
    <!-- <MyButton @click="onMyButtonClick">Ok</MyButton> -->
    <GlobalButton @click="onMyButtonClick">ok123</GlobalButton>
    <!-- <SomethingTheme /> -->

    <!-- <Spacing /> -->

    <!-- <TextAndTypography /> -->

    <!-- <Transitions /> -->

    <MyAvatar />
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const display = useDisplay();

onMounted(() => {
  // console.log(JSON.stringify(display, null, 2));
});

function onMyButtonClick() {
  alert("ok");
}

const alertType = computed(() => {
  switch (display.name.value) {
    case "xs":
      return "success";
    case "sm":
      return "info";
    case "md":
      return "warning";
    case "lg":
    case "xl":
      return "error";
  }

  return undefined;
});
</script>
