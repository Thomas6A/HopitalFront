import { useEffect, useState } from "react";
import PatientModel from "../Model/PatientModel";
import PatientService from "../Service/PatientService";
import FormPatientView from "../Vue/Pages/FormPatientView";
import { useParams } from "react-router-dom";

const FormPatientController = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPatient().then((data) => {
            setPatient(data);
            setLoading(false);
        });
    }, [])

    const fetchPatient = async () => {
        try {
            if (id != null) {
                let patient = new PatientModel();
                let response = await PatientService.fetchPatientsById(id);
                patient.setId(response.data.idPatient);
                patient.setPrenom(response.data.firstName);
                patient.setNom(response.data.lastName);
                patient.setSecu(response.data.socialSecurityNumber);
                patient.setAnniversaire(response.data.birthdate);
                patient.setCreation(response.data.createdAt);
                patient.setModification(response.data.modifiedAt);
                setPatient(patient);
                return patient;
            }else{
                return null;
            }
        } catch (error) {
            console.log("erreur" + error);
        }
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    return (FormPatientView(patient))
}

export default FormPatientController;