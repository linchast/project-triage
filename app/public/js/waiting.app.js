var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    },
    //display how long until cert expires by using this but get rid of the hour and only have the date
    displayWaitingLocalDate(d) {
      return moment.utc(d).local().format("HH:mm MMM Do");
    },
    displayWaitingSince(d) {
      return moment.utc(d).local().format("HH:mm MMM Do").fromNow();
    }
  },
  created() {
    this.fetchPatients();
  }
});
