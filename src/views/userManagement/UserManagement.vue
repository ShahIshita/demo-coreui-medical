<!-- DynamicTable.vue -->
<template>
  <div>
    <CTable
      :items="tableData"
      :fields="tableFields"
      :items-per-page="5"
      :hover="true"
      :striped="false"
      :bordered="true"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tableData = ref([
      { id: 1, name: "John Doe", age: 25 },
      { id: 2, name: "Jane Doe", age: 30 },
      // Add more data as needed
    ]);

    const tableFields = ref([
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "age", label: "Age" },
      // Add more fields as needed
    ]);

    return {
      tableData,
      tableFields,
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
