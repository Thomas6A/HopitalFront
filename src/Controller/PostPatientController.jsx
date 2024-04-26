import PatientService from "../Service/PatientService";

const PostPatientController = (patient) => {
    try {
        PatientService.postPatient(patient)
    } catch (error) {
        console.log("erreur" + error);
    }
}

export default PostPatientController