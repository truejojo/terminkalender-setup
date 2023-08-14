<script setup>
import Store from "../store"
const { event, dayId } = defineProps({
  event: {
    type: [],
  },
  dayId: Number
});

const displayPriorityName = () => {
  switch (event.priority) {
    case 1:
      return "Tief";
    case 0:
      return "Mittel";
    case -1:
      return "Hoch";
    default:
      return "Mittel";
  }
};

const setEventBG = () => `alert-${event.color}`;

const deleteEvent = () => Store.mutations.deleteEvent(dayId, event.title)
</script>

<template>
  <div class="event alert text-center alert" :class="setEventBG()">
    <div>
      <!-- <strong>{{ setPriority() }}</strong> -->
      <slot name="priority" :displayPriorityName="displayPriorityName"
        >Mittel</slot
      >
    </div>

    <!-- <h5>{{ event.title }}</h5> -->
    <slot name="title" :title="event.title"> Title </slot>

    <div>
      <i class="fas fa-edit me-2" role="button"></i>
      <i class="far fa-trash-alt" role="button" @click="deleteEvent"></i>
    </div>
  </div>
</template>

<style></style>
