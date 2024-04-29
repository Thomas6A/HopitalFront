import { Form } from "react-bootstrap";
import AssignPatientController from "../../Controller/AssignPatientController";
import UnassignPatientController from "../../Controller/UnassignPatientController";

const DetailPatientView = (patient, services) => {

    const handleChange = (event) =>{
        console.log(event.target.value);
        if (event.target.value == "null") {
            UnassignPatientController(patient)
            alert("Désassigné du service")
        }else{
            AssignPatientController(patient, event.target.value);
            alert("Service changé")
        }
        window.location.reload();
    }

    return (
        <>
            <div className="mx-1">
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Nom : </span>
                    <span>{patient.nom}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Prénom : </span>
                    <span>{patient.prenom}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>N° de sécurité social : </span>
                    <span>{patient.secu}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Date de naissance : </span>
                    <span>{patient.date_anniversaire}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Créé le : </span>
                    <span>{patient.date_creation}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Modifié le : </span>
                    <span>{patient.date_modification}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Numéro de chambre : </span>
                    <span>{patient.chambre}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Service affecté :{console.log(patient)}</span>
                    <Form.Select aria-label="Default select example" defaultValue={patient.service?patient.service.id:null} className="w-50" onChange={handleChange}>
                        <option value="null">Aucun Service</option>
                        {services.map(service => (
                            <option key={service.getId()} value={service.id}>
                                {service.getName()}
                            </option>
                        ))}
                    </Form.Select>
                </p>
            </div>
        </>
    );

}

export default DetailPatientView;