import { useEffect, useState } from "react";
import PatientService from "../Service/PatientService";
import PatientModel from "../Model/PatientModel";
import GetPatientsView from "../Vue/Pages/GetPatientsView";

const GetAllPatientsController = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, [])

    const fetchPatients = async () => {
        try {
            let response = await PatientService.fetchPatients();
            const listPatients = [];
            response.data.forEach(data => {
                let patient = new PatientModel();
                patient.setId(data.idPatient);
                patient.setPrenom(data.firstName);
                patient.setNom(data.lastName);
                patient.setSecu(data.socialSecurityNumber);
                patient.setAnniversaire(data.birthdate);
                patient.setCreation(data.createdAt);
                patient.setModification(data.modifiedAt);
                listPatients.push(patient);
            });
            setPatients(listPatients);
        } catch (error) {
            console.log("erreur" + error);
        }
    }


    return (GetPatientsView(patients))

}

export default GetAllPatientsController;