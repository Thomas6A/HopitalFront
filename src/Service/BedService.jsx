import axios from "axios";

function fetchBed(id) {
    return axios.get("https://api-ecf.sarahkatz.fr/beds/byPatient/"+ id)
}

export default{
    fetchBed
}