<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background: #ffc845">
      <q-toolbar>
        <q-img
          src="src/assets/bee.png"
          width="50px"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Beecare </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Accueil",
    icon: "home",
    link: "/",
  },
  {
    title: "Utilisateur",
    icon: "account_circle",
    link: "/#/user",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
