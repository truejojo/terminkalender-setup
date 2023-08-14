<script setup>
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarSettings from "./components/CalendarSettings.vue";
</script>

<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <CalendarWeek />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-3">
        <CalendarEntry />
      </div>
      <div class="col-3 offset-2">
        <div class="float-end">
          <button class="btn btn-lg mb-2">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <CalendarSettings />
      </div>
    </div>
  </div>
</template>

<style>
@import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";

.square {
  width: 40px;
  height: 40px;
}
</style>
