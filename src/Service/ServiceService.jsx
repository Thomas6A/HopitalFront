import axios from "axios";

function fetchServices() {
    return axios.get("http://api-ecf.sarahkatz.fr/services")
}

export default{
    fetchServices
}