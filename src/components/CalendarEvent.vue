<script setup>
import { nextTick, ref } from "vue";
// import {useFocus} from "@vueuse/core";
import CalendarEventPriority from "./CalendarEventPriority.vue";
import Store from "../store";

const { event, dayId } = defineProps({
  event: {
    type: [],
  },
  dayId: Number,
});

const inputTitle = ref("");
const selectPriority = ref(event.priority);
const inputTitleRef = ref("");

const displayPriorityName = () =>
  event.priority === 1 ? "Tief" : event.priority === -1 ? "Hoch" : "Mittel";
const setEventBG = () => `alert-${event.color}`;


const editEvent = () => {
  Store.mutations.editEvent(dayId, event.title);
};
const updateEvent = () =>
  Store.mutations.updateEvent(dayId, event.title, {
    newTitle: inputTitle.value,
    newPriority: selectPriority.value,
  });
const deleteEvent = () => Store.mutations.deleteEvent(dayId, event.title);
</script>

<template>
  <div class="event alert text-center alert" :class="setEventBG()">
    <template v-if="!event.edit">
      <div>
        <!-- <strong>{{ setPriority() }}</strong> -->
        <slot name="priority" :displayPriorityName="displayPriorityName"
          >Mittel</slot
        >
      </div>
      <!-- <h5>{{ event.title }}</h5> -->
      <slot name="title" :title="event.title"> Title </slot>
      <div>
        <i class="fas fa-edit me-2" role="button" @click="editEvent"></i>
        <i class="far fa-trash-alt" role="button" @click="deleteEvent"></i>
      </div>
    </template>
    <template v-else>
      <input
        type="text"
        class="form-control"
        :placeholder="event.title"
        v-model.trim="inputTitle"
        ref="inputTitleRef"
      />
      <!-- <CalendarEventPriority :selectPriorityRef="selectPriorityRef" /> -->
      <select class="form-select mt-2" v-model="selectPriority">
        <option value="-1">Hoch</option>
        <option value="0">Mittel</option>
        <option value="1">Tief</option>
      </select>
      <hr />
      <i class="fas fa-check" @click="updateEvent"></i>
    </template>
  </div>
</template>

<style></style>
