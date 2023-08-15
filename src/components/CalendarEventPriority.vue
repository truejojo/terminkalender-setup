<script setup>
// const {selectPriorityRef} = defineProps({
//   selectPriorityRef: {},
// });
</script>

<template>
  <select class="form-select mt-2" >
  <!-- <select class="form-select mt-2" v-model="selectPriorityRef"> -->
    <option value="-1">Hoch</option>
    <option value="0">Mittel</option>
    <option value="1">Tief</option>
  </select>
</template>