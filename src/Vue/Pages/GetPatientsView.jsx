import { Table } from "react-bootstrap";
import { EyeFill, PencilFill, XOctagonFill } from "react-bootstrap-icons";

const GetPatientsView = (patients) => {


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
                            <PencilFill color="#FFC107" className="mx-2"/>
                            <XOctagonFill color="#DC3545" className="mx-2"/>
                        </th>
                    </tr>
                ))}
            </tbody>
      </Table>
    );
};

export default GetPatientsView;