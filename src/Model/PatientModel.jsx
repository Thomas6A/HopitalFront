class PatientModel{

    id;
    prenom;
    nom;
    secu;
    date_anniversaire;
    date_creation;
    date_modification;
    chambre;
    service

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setPrenom(prenom) {
        this.prenom = prenom;
    }

    getPrenom() {
        return this.prenom;
    }

    setNom(nom) {
        this.nom = nom;
    }

    getNom() {
        return this.nom;
    }

    setSecu(secu) {
        this.secu = secu;
    }

    getSecu() {
        return this.secu;
    }

    setAnniversaire(date_anniversaire) {
        this.date_anniversaire = date_anniversaire;
    }

    getAnniversaire() {
        return this.date_anniversaire;
    }

    setCreation(date_creation) {
        this.date_creation = date_creation;
    }

    getCreation() {
        return this.date_creation;
    }

    setModification(date_modification) {
        this.date_modification = date_modification;
    }

    getModification() {
        return this.date_modification;
    }

    setChambre(chambre) {
        this.chambre = chambre;
    }

    getChambre() {
        return this.chambre;
    }

    setService(service) {
        this.service = service;
    }

    getService() {
        return this.service;
    }

}

export default PatientModel;