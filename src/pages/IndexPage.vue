<template>
  <q-page>
    <h4 class="text-h4 text-center">Liste des ruches connectées</h4>
    <CardBee v-for="num in cardList" :key="num.title" v-bind="num" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import CardBee from "components/CardBee.vue";

const beeCards = [
  {
    num: 1,
    author: "home",
    description: "",
    img: "https://fr.jardins-animes.com/images/extraimages/ruche-abeille-inoffensive-jardin.jpg",
  },
  {
    num: 2,
    author: "home",
    description: "",
    img: "https://ruches-et-ruchettes-de-france.com/2-large_default/ruche-dadant-10c-plancher-bois-hausse-toit-chalet.jpg",
  },
  {
    num: 3,
    author: "home",
    description: "",
    img: "https://monjardinmamaison.maison-travaux.fr/wp-content/uploads/sites/8/2020/06/gettyimages-665690923-614x410.jpg",
  },
  {
    num: 4,
    author: "home",
    description: "",
    img: "https://www.rucherecole.fr/img/cms/ruches/Dadant/trou-de-vol-rond-ruche-Dadant.jpg",
  },
];

export default defineComponent({
  name: "IndexPage",
  components: {
    CardBee,
  },

  setup() {
    return {
      cardList: beeCards,
    };
  },
});
</script>
