import PatientService from "../Service/PatientService";

const DeletePatientController = (id) => {
    try {
        PatientService.deletePatient(id)
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default DeletePatientController