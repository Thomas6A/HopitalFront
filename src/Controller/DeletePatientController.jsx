import PatientService from "../Service/PatientService";

const DeletePatientController = (id) => {
    try {
        console.log(id);
        PatientService.deletePatient(id)
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default DeletePatientController