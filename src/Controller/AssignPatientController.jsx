import PatientService from "../Service/PatientService";

const AssignPatientController = (patient, service) => {
    try {
        console.log(patient);
        PatientService.assignPatient(patient,service)
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default AssignPatientController