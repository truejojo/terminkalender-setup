<script setup>
import CalendarDay from "./CalendarDay.vue";
</script>

<template>
  <div class="card-group">
    <CalendarDay v-for="i in 7" :key="i" />
  </div>
</template>