<template>
  <VContainer class="pa-6" fluid>
    <VRow>
      <VCol class="d-flex align-center" cols="12" sm="6">
        <VSelect
          v-model="paddingDirection"
          :items="directions"
          class="pr-2"
          label="Padding"
        >
          <template #prepend
            ><strong class="text-error py-1">p</strong></template
          >
          <template #append-outer>
            <div class="py-1">-</div>
          </template>
        </VSelect>
        <VSelect
          v-model="paddingSize"
          :items="paddingSizes"
          label="Size"
        ></VSelect>
      </VCol>

      <VCol class="d-flex align-center" cols="12" sm="6">
        <VSelect
          v-model="marginDirection"
          :items="directions"
          class="pr-2"
          label="Margin"
        >
          <template #prepend
            ><strong class="text-error py-1">m</strong></template
          >
          <template #append-outer>
            <div class="py-1">-</div>
          </template>
        </VSelect>
        <VSelect
          v-model="marginSize"
          :items="marginSizes"
          label="Size"
        ></VSelect>
      </VCol>

      <VCol class="bg-primary pa-0" cols="12">
        <VSheet :class="computedMargin" rounded>
          <div :class="computedPadding" class="bg-secondary">
            <div class="bg-white text-center py-6">
              Use the controls above to try out the different spacing helpers.
            </div>
          </div>
        </VSheet>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const spacers = Array.from({ length: 17 }, (_, i) => `${i}`);
const nspacers = Array.from({ length: 16 }, (_, i) => `n${i + 1}`);
const directions = ["t", "b", "l", "r", "s", "e", "x", "y", "a"];

const paddingDirection = ref("a");
const paddingSize = ref("6");
const paddingSizes = ref([...spacers]);

const marginDirection = ref("a");
const marginSize = ref("2");
const marginSizes = ref(["auto", ...spacers, ...nspacers]);

const computedPadding = computed(
  () => `p${paddingDirection.value}-${paddingSize.value}`
);
const computedMargin = computed(
  () => `m${marginDirection.value}-${marginSize.value}`
);
</script>
