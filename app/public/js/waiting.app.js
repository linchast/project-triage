var waitingApp = new Vue({
  el: '#patientWaitingApp', //element
  data: { //calling the data

    patients: [ ]
  },
  
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then( response => response.json() )
      .then( json => {waitingApp.patients = json})
      // .catch ( function goes here)
      ;
      thenDoThis();
    }
  },
  created() {
    this.fetchPatients();
  }
})
