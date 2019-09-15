var waitingApp = new Vue({
  el: '#patientWaitingApp',
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
      .then( json => {waitingApp.person = json.results[0]})
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






// var waitingApp = new Vue({
//   el: '#patientWaitingApp',
//   data: {
//     patients: []
//   },
//   methods: {
//     fetchPatients() {
//       fetch('dummy.php')
//       .then(response => response.json())
//       .then(json => {waitingApp.patients = json});
//
//       // Means the same at this
//       // fetch('https://randomuser.me/api/')
//       // .then(function(response) {return response.json()})
//       // .then(function(json) {waitingApp.people = json});
//
//     }
//   },
//   created: function() {
//     this.fetchPatients();
//   }
//
// })
