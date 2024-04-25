import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BedService from "../Service/BedService";
import PatientModel from "../Model/PatientModel";
import PatientService from "../Service/PatientService";
import ServiceService from "../Service/ServiceService";
import ServiceModel from "../Model/ServiceModel";
import DetailPatientView from "../Vue/Pages/DetailPatientView";

const GetPatientByIdController = () => {
    const [detail, setDetail] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id_patient} = useParams();

    useEffect(() => {
        fetchPatient();
        fetchServices().then((data) => {
            setServices(data);
            setLoading(false);
        });
    }, [])

    const fetchPatient = async () => {
        try {
            let response = await BedService.fetchBed(id_patient);
            let patient = new PatientModel();
            if (response.data == "") {
                response = await PatientService.fetchPatientsById(id_patient);
                console.log(response);
                patient.setId(response.data.idPatient);
                patient.setPrenom(response.data.firstName);
                patient.setNom(response.data.lastName);
                patient.setSecu(response.data.socialSecurityNumber);
                patient.setAnniversaire(response.data.birthdate);
                patient.setCreation(response.data.createdAt);
                patient.setModification(response.data.modifiedAt);
            }else{
                patient.setId(response.data.patient.idPatient);
                patient.setPrenom(response.data.patient.firstName);
                patient.setNom(response.data.patient.lastName);
                patient.setSecu(response.data.patient.socialSecurityNumber);
                patient.setAnniversaire(response.data.patient.birthdate);
                patient.setCreation(response.data.patient.createdAt);
                patient.setModification(response.data.patient.modifiedAt);
                patient.setChambre(response.data.room.number);
                let service = new ServiceModel();
                service.setId(response.data.room.service.idService);
                service.setName(response.data.room.service.name);
                patient.setService(service);
            }
            setDetail(patient);
        } catch (error) {
            console.log("erreur" + error);
        }
    }

    const fetchServices = async () => {
        try {
            let response = await ServiceService.fetchServices();
            const listServices = [];
            response.data.forEach(data => {
                let service = new ServiceModel();
                service.setId(data.idService);
                service.setName(data.name);
                listServices.push(service);
            });
            return listServices;
        } catch (error) {
            console.log("erreur" + error);
        }
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    return(DetailPatientView(detail,services));
    
}

export default GetPatientByIdController;