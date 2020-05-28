import axios from "axios";

const state = {
  events: []
};

const getters = {
  allEvents: state => state.events
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(
      "http://localhost:8000/api/events?page=1",
      { headers: { accept: "application/json" } }
    );

    commit("setEvents", response.data);
  }
};

const mutations = {
  setEvents: (state, events) => (state.events = events)
};

export default {
  state,
  getters,
  actions,
  mutations
};
