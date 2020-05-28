<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Date</th>
          <th class="text-left">Type</th>
          <th class="text-left">Profile</th>
          <th class="text-left">Content</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in allEvents" :key="event.date">
          <td>{{ event.date | moment("from", "now") }}</td>
          <td>{{ event.type }}</td>
          <td>{{ event.profile }}</td>
          <td>{{ event.content }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
