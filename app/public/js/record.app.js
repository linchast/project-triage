var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    person: [
      {

      }
    ]
  },
  methods: {
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {patientRecordApp.person = json.results[0]})
      ;

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchPatients();
  }
})
