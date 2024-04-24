import axios from "axios";

function fetchPatients() {
    return axios.get("https://api-ecf.sarahkatz.fr/patients")
}

export default{
    fetchPatients
}