import axios from "axios";

function fetchPatients() {
    return axios.get("https://api-ecf.sarahkatz.fr/patients")
}

function fetchPatientsById(id) {
    return axios.get("https://api-ecf.sarahkatz.fr/patients/"+id)
}

export default{
    fetchPatients,
    fetchPatientsById
}