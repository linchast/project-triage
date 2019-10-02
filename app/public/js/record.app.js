<<<<<<< HEAD
var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
      firstName: '',
      lastName: '',
      dob: '',
      sexAtBirth: ''
    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    },
    handleCreateRecord(event) {
      //TODO: Post data to API
      //fetch(url, {method: 'post', data: this.formPatient})
      //.then(...)
      this.patients.push(this.formPatient); //take object and add to table
      this.formPatient = { //creates a new instance of the form
=======
var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchPatients() {
      fetch('api/patients.php')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    },
    handleSubmit(event) {
      // fetch(url, {
      //   method: 'post',
      //   data: this.recordPatient
      // })
      // .then( ... )
      this.patients.push( this.recordPatient );
      this.handleReset();
    },
    handleReset() {
      this.recordPatient = {
>>>>>>> pr/1
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
<<<<<<< HEAD
        }
      },
      handleRecordClick(patient) {
        //TODO: pass this data to another Vue App
        console.log(patient);
      }
  },
  created() {
=======
      }
    },
    handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }
  }, // end methods
  created() {
    this.handleReset();
>>>>>>> pr/1
    this.fetchPatients();
  }
});
