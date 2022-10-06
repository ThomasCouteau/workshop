<template>
  <q-page>
    <h4 class="text-h4 text-center">Ruche 3</h4>
    <BoardBee />
    <div class="row justify-center">
      <q-btn href="/" color="red" label="Retour" size="lg" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import BoardBee from "src/components/BoardBee.vue";

export default defineComponent({
  name: "CardThreePage",
  components: { BoardBee },
});
</script>
