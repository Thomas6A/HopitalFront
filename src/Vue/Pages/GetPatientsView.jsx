import { Table } from "react-bootstrap";
import { EyeFill, PencilFill, XOctagonFill } from "react-bootstrap-icons";
import DeletePatientController from "../../Controller/DeletePatientController";

const GetPatientsView = (patients) => {

    const handleClick = (patient) =>{
        DeletePatientController(patient.id);
        window.location.reload();
    }

    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {patients.map(patient => (
                    <tr key={patient.id}>
                        <th>{patient.getPrenom()}</th>
                        <th>{patient.getNom()}</th>
                        <th>
                            <a href={"detail/"+patient.id}><EyeFill color="#17A2B8" className="mx-2"/></a>
                            <a href={"form/"+patient.id}><PencilFill  color="#FFC107" className="mx-2"/></a>
                            <a onClick={() => handleClick(patient)}><XOctagonFill color="#DC3545" className="mx-2"/></a>
                        </th>
                    </tr>
                ))}
            </tbody>
      </Table>
    );
};

export default GetPatientsView;