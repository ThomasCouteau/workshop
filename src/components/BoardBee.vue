<template>
  <div class="q-pa-md">
    <q-table
      title="Taux de Thymol"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: "BoardBee",
    required: true,

    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  { name: "thymol", label: "Thymol (mg/L)", field: "thymol", sortable: true },
];

const rows = [
  {
    name: "3e mesure",
    thymol: 13,
  },
  {
    name: "2e mesure",
    thymol: 11,
  },
  {
    name: "1er mesure",
    thymol: 5,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
