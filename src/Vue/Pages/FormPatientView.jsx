import { Button, Form } from "react-bootstrap";
import PutPatientController from "../../Controller/PutPatientController";
import PostPatientController from "../../Controller/PostPatientController";
import PatientModel from "../../Model/PatientModel";

const FormPatientView = (patient) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.elements.DateNaissance.value == "") {
            alert("Date invalide")
            return
        }
        if (patient == null) {
            let patientCreer = new PatientModel();
            patientCreer.setNom(event.target.elements.NomPatient.value)
            patientCreer.setPrenom(event.target.elements.PrenomPatient.value)
            patientCreer.setAnniversaire(event.target.elements.DateNaissance.value)
            patientCreer.setSecu(event.target.elements.Secu.value)
            PostPatientController(patientCreer);
            alert("Patient créer")
        } else {
            patient.setNom(event.target.elements.NomPatient.value)
            patient.setPrenom(event.target.elements.PrenomPatient.value)
            patient.setAnniversaire(event.target.elements.DateNaissance.value)
            patient.setSecu(event.target.elements.Secu.value)
            console.log(patient);
            PutPatientController(patient);
            alert("patient modifié")
        }
        window.location.reload;
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="NomPatient" >
                    <Form.Control type="text" defaultValue={patient && patient.nom ? patient.getNom() : "Nom du patient"} pattern="^[a-zA-Z]+$" title="Nom invalide" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="PrenomPatient" >
                    <Form.Control type="text" defaultValue={patient && patient.prenom ? patient.getPrenom() : "Prenom du patient"} pattern="^[a-zA-Z]+$" title="Prénom invalide" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="DateNaissance">
                    <Form.Control type="date" defaultValue={patient && patient.date_anniversaire ? patient.getAnniversaire() : "Date de Naissance"} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Secu">
                    <Form.Control type="text" defaultValue={patient && patient.secu ? patient.getSecu().replace(/(\d)(\d{2})(\d{2})(\d{2})(\d{3})(\d{3})(\d{2})/,
                        "$1 $2 $3 $4 $5 $6 $7") : "N° de sécurité social"} pattern="^[12]\d{14}$" title="Numéro de sécurité sociale invalide" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Envoyer
                </Button>
            </Form>
        </div>
    );
}

export default FormPatientView;