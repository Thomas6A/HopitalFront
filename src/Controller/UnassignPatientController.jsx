import PatientService from "../Service/PatientService";

const UnassignPatientController = (patient) => {
    try {
        PatientService.unassignPatient(patient)
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default UnassignPatientController