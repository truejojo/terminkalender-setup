import { reactive, readonly } from "vue";
import { calendarWeekData } from "../data/seed";

const state = reactive({
  calendarWeekData,
});

const getters = {
  activeDay() {
    return state.calendarWeekData.find((day) => day.active);
  },
};

const mutations = {
  deleteEvent(dayID, eventTitle) {
    // state.calendarWeekData
    //   .find((day) => day.id === dayID)
    //   .events.filter((event) => event.title !== eventTitle);
    const currentDay = state.calendarWeekData.find((day) => day.id === dayID);
    const eventIndex = currentDay.events.findIndex(
      (event) => event.title === eventTitle
    );
    currentDay.events.splice(eventIndex, 1)
  },
};

export default {
  // state: readonly(state),
  state,
  getters,
  mutations,
};
