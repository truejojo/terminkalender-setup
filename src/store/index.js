import { reactive, readonly } from "vue";
import { calendarWeekData } from "../data/seed";

const state = reactive({
  calendarWeekData,
});

const getters = {};

const mutations = {};

export default {
  state: readonly(state),
  getters,
  mutations,
};
