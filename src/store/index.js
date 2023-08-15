import { reactive, readonly } from "vue";
import { calendarWeekData } from "../data/seed";

const state = reactive({
  calendarWeekData,
});

const getters = {
  activeDay() {
    return state.calendarWeekData.find((day) => day.active);
  },
  setAllEventsToFalse() {
    state.calendarWeekData.map((day) =>
      day.events.map((event) => (event.edit = false))
    );
  },
};

const mutations = {
  editEvent(dayId, eventTitle) {
    getters.setAllEventsToFalse();
    state.calendarWeekData
      .find((day) => day.id === dayId)
      .events.find((event) => event.title === eventTitle).edit = true;
  },
  updateEvent(dayId, oldTitle, { newTitle, newPriority }) {
    newTitle = newTitle !== "" ? newTitle : oldTitle;

    const currentEvent = state.calendarWeekData
      .find((day) => day.id === dayId)
      .events.find((event) => event.title === oldTitle);

    currentEvent.title = newTitle;
    currentEvent.priority = parseInt(newPriority);
    currentEvent.edit = false
  },
  deleteEvent(dayID, eventTitle) {
    // state.calendarWeekData
    //   .find((day) => day.id === dayID)
    //   .events.filter((event) => event.title !== eventTitle);
    const currentDay = state.calendarWeekData.find((day) => day.id === dayID);
    const eventIndex = currentDay.events.findIndex(
      (event) => event.title === eventTitle
    );
    currentDay.events.splice(eventIndex, 1);
  },
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
