import { Form } from "react-bootstrap";

const DetailPatientView = (patient, services) => {

    return (
        <>
            <div className="mx-1">
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Nom : </span>
                    <span>{patient.getNom()}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Prénom : </span>
                    <span>{patient.getPrenom()}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>N° de sécurité social : </span>
                    <span>{patient.getSecu()}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Date de naissance : </span>
                    <span>{patient.getAnniversaire()}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Créé le : </span>
                    <span>{patient.getCreation()}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Modifié le : </span>
                    <span>{patient.getModification()}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Numéro de chambre : </span>
                    <span>{patient.getChambre()}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Service affecté :{console.log(services)}</span>
                    <Form.Select aria-label="Default select example" defaultValue={patient.service?patient.service.id:null} className="w-50">
                        <option value={null}>Aucun Service</option>
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