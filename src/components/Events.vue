<template>
  <div>
    <h3>Events</h3>
    <div class="events">
      <div v-for="event in allEvents" :key="event.id" class="event">
        {{ event.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Events",
  methods: {
    ...mapActions(["fetchEvents"])
  },
  computed: mapGetters(["allEvents"]),
  created() {
    this.fetchEvents();
  }
};
</script>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.event {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .events {
    grid-template-columns: 1fr;
  }
}
</style>
