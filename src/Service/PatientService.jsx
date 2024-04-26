import axios from "axios";

function fetchPatients() {
    return axios.get("https://api-ecf.sarahkatz.fr/patients")
}

function fetchPatientsById(id) {
    return axios.get("https://api-ecf.sarahkatz.fr/patients/"+id)
}

function assignPatient(patient, id){
    return axios({
        method: 'post',
        url: "https://api-ecf.sarahkatz.fr/patients/assign/"+id,
        headers: {},
        data:{
            "idPatient":patient.id,
            "firstName":patient.prenom,
            "lastName":patient.nom,
            "birthdate":patient.anniversaire,
            "socialSecurityNumber":patient.secu,
            "createdAt":patient.creation,
            "modifiedAt":patient.modification
        }
    })
}

function unassignPatient(patient){
    return axios({
        method: 'post',
        url: "https://api-ecf.sarahkatz.fr/patients/unassign",
        headers: {},
        data:{
            "idPatient":patient.id,
            "firstName":patient.prenom,
            "lastName":patient.nom,
            "birthdate":patient.anniversaire,
            "socialSecurityNumber":patient.secu,
            "createdAt":patient.creation,
            "modifiedAt":patient.modification
        }
    })
}

function postPatient(patient){
    return axios({
        method: 'post',
        url: "https://api-ecf.sarahkatz.fr/patients",
        headers: {},
        data:{
            "firstName":patient.prenom,
            "lastName":patient.nom,
            "birthdate":patient.date_anniversaire,
            "socialSecurityNumber":patient.secu,
        }
    })
}

function putPatient(patient){
    return axios({
        method: 'put',
        url: "https://api-ecf.sarahkatz.fr/patients",
        headers: {},
        data:{
            "idPatient":patient.id,
            "firstName":patient.prenom,
            "lastName":patient.nom,
            "birthdate":patient.date_anniversaire,
            "socialSecurityNumber":patient.secu,
            "createdAt":patient.date_creation,
            "modifiedAt":patient.date_modification
        }
    })
}

function deletePatient(id){
    return axios.delete("https://api-ecf.sarahkatz.fr/patients/"+id)
}

export default{
    fetchPatients,
    fetchPatientsById,
    assignPatient,
    unassignPatient,
    postPatient,
    putPatient,
    deletePatient
}