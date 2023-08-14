<script setup>
import CalendarEvent from "./CalendarEvent.vue";

const props = defineProps({
  day: {
    type: Object,
    required: true,
  },
});
const { day } = props;

const activeDayHeader = day.active ? ["bg-primary", "text-white"] : null;
const activeDayBody = day.active
  ? ["border", "border-2", "border-primary"]
  : null;
</script>

<template>
  <div class="card">
    <div class="card-header text-center" :class="activeDayHeader" role="button">
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body" :class="activeDayBody">
      <CalendarEvent
        v-for="event in day.events"
        :key="event.title"
        :event="event"
      >
        <template #priority="{ displayPriorityName }">
          <h5>{{ displayPriorityName() }}</h5>
        </template>
        <template #title="{ title }">
          <p>{{ title }}</p>
        </template>
      </CalendarEvent>
    </div>
  </div>
</template>
