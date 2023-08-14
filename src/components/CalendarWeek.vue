<script setup>
import Store from "../store";
import CalendarDay from "./CalendarDay.vue";

const calendarWeekData = Store.state.calendarWeekData;
</script>

<template>
  <div class="card-group">
    <CalendarDay v-for="day in calendarWeekData" :key="day.id" :day="day" />
  </div>
</template>
