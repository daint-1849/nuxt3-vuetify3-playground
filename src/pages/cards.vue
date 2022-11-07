<template>
  <div>
    <div>
      <h3>Basics</h3>
      <div class="d-flex align-center flex-column">
        <div class="text-subtitle-2">With props</div>

        <v-card
          width="400"
          title="This is a title"
          subtitle="This is a subtitle"
          text="This is content"
        ></v-card>

        <div class="mt-4 text-subtitle-2">With slots</div>

        <v-card width="400">
          <template #title> This is a title </template>

          <template #subtitle> This is a subtitle </template>

          <template #text> This is content </template>
        </v-card>

        <div class="mt-4 text-subtitle-2">With markup</div>

        <v-card width="400">
          <v-card-item>
            <v-card-title>This is a title</v-card-title>

            <v-card-subtitle>This is a subtitle</v-card-subtitle>
          </v-card-item>

          <v-card-text> This is content </v-card-text>
        </v-card>
      </div>
    </div>

    <div>
      <h3>Custom actions</h3>
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          cover
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

        <v-card-actions class="pa-3">
          <v-btn color="primary" variant="text"> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? mdiChevronUp : mdiChevronDown"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>

    <div>
      <h3>Grids</h3>
      <v-card class="mx-auto" max-width="500">
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card>
                <v-img
                  :src="card.src"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover
                >
                  <v-card-title class="text-white">{{
                    card.title
                  }}</v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    size="small"
                    color="surface-variant"
                    variant="text"
                    :icon="mdiHeart"
                  ></v-btn>

                  <v-btn
                    size="small"
                    color="surface-variant"
                    variant="text"
                    :icon="mdiBookmark"
                  ></v-btn>

                  <v-btn
                    size="small"
                    color="surface-variant"
                    variant="text"
                    :icon="mdiShareVariant"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiHeart,
  mdiBookmark,
  mdiShareVariant,
} from "@mdi/js";
const show = ref(false);
const cards = [
  {
    title: "Pre-fab homes",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 12,
  },
  {
    title: "Favorite road trips",
    src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
    flex: 6,
  },
  {
    title: "Best airlines",
    src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
    flex: 6,
  },
];
</script>

<style scoped></style>
