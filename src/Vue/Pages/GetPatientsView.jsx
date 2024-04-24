import { Table } from "react-bootstrap";
import { EyeFill, PencilFill, XOctagonFill } from "react-bootstrap-icons";

const GetProducts = (patients) => {


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
                            <EyeFill color="#17A2B8" className="mx-2"/>
                            <PencilFill color="#FFC107" className="mx-2"/>
                            <XOctagonFill color="#DC3545" className="mx-2"/>
                        </th>
                    </tr>
                ))}
            </tbody>
      </Table>
    );
};

export default GetProducts;