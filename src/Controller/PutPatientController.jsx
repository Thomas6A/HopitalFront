import PatientService from "../Service/PatientService";

const PutPatientController = (patient) => {
    try {
        PatientService.putPatient(patient)
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default PutPatientController