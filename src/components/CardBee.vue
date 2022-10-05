<template>
  <div class="q-pa-md row items-center justify-center q-gutter-md">
    <q-card class="my-card">
      <img :src="img" />

      <q-card-section>
        <div class="text-h6">N° {{ num }}</div>
        <div class="text-subtitle2">{{ author }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ description }}
        <q-btn class="justify-end" color="secondary" label="Plus d'infos" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardBee",
  props: {
    num: {
      type: Number,
      required: true,
    },

    author: {
      type: String,
      default: "Un propriètaire",
    },

    img: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "Une ruche connectée",
    },
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
