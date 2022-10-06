<template>
  <q-page class="q-pa-md row items-start q-gutter-md"
    ><q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Profil</div>
          <div class="text-h4 q-mt-sm q-mb-xs">John Doe</div>
          <div class="text-h7">Email: johndoe@dev.bee</div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "UserPage",
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
  max-height : 500px
</style>
