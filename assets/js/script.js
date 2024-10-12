//VALIDATION FORMULAIRE CONTACT
// SELECTION INPUT
const firstName = document.querySelector("#name");
const prenom = document.querySelector("#prenom");
const codePostal = document.querySelector("#codePostal");
const adresse = document.querySelector("#adresse");
const ville = document.querySelector("#ville");
const email = document.querySelector("#email");
const message = document.querySelector("#message");



// SELECTION MESSAGE ERREURS
const errorName = document.querySelector("#error-name");
const errorPrenom = document.querySelector("#error-prenom");
const errorCodePostal = document.querySelector("#error-codePostal");
const errorAdresse = document.querySelector("#error-adresse");
const errorVille = document.querySelector("#error-ville");
const errorEmail = document.querySelector("#error-email");
const errorMessage = document.querySelector("#error-message");

const allErrorMessage = document.querySelectorAll(".error-msg");


// SELECTION BTN SUBMIT / RESET
const btnSubmit = document.querySelector("#btn-submit");
const btnReset = document.querySelector("#btn-reset");


//REGEX
const charValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const adresseValid = /^[#.0-9a-zA-Z\s,-]+$/;
const postalValid = /^([0-9]{5})+$/;
const emailValid = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;




// ------------EVENTLISTNER SUBMIT---------------

btnSubmit.addEventListener("click", handleClickSubmit);

function handleClickSubmit(e){
    //NAME
    if(firstName.validity.valueMissing){
        // TEST CHAMP VIDE
        e.preventDefault();
        errorName.textContent="Entrez votre nom";
        errorName.style.color="#8d0202";
    }
    else if(charValid.test(firstName.value) == false){
        // VALIDATION REGEX
        e.preventDefault();
        errorName.textContent = "Format incorrect";
        errorName.style.color="#8d0202";
    }    
    


    //PRENOM
    if (prenom.validity.valueMissing) {
        // TEST CHAMP VIDE
        e.preventDefault();
        errorPrenom.textContent="Entrez votre prénom";
        errorPrenom.style.color="#8d0202";
    }else if(charValid.test(prenom.value) == false){
        // VALIDATION REGEX
        errorPrenom.textContent = "Format incorrect";
        errorPrenom.style.color="#8d0202";
    }


    //CODE POSTAL
    if (codePostal.validity.valueMissing) {
        // TEST CHAMP VIDE
        e.preventDefault();
        errorCodePostal.textContent="Entrez votre code postal";
        errorCodePostal.style.color="#8d0202";
    }else if(postalValid.test(codePostal.value) == false){
        // VALIDATION REGEX
        errorCodePostal.textContent = "5 chiffres sont demandés";
        errorCodePostal.style.color="#8d0202";
    }


    //ADRESSE
    if (adresse.validity.valueMissing) {
        // TEST CHAMP VIDE
        e.preventDefault();
        errorAdresse.textContent="Entrez votre adresse";
        errorAdresse.style.color="#8d0202";
    }else if(adresseValid.test(adresse.value)){
        errorAdresse.textContent="Valid";
        errorAdresse.style.color="green";
    }


    //VILLE
    if (ville.validity.valueMissing) {
        // TEST CHAMP VIDE
        e.preventDefault();
        errorVille.textContent="Entrez votre ville";
        errorVille.style.color="#8d0202";
    }else if(charValid.test(ville.value) == false){
        // VALIDATION REGEX
        errorVille.textContent = "Format incorrect";
        errorVille.style.color="#8d0202";
    }


    //EMAIL
    if (email.validity.valueMissing) {
        // TEST CHAMP VIDE
        e.preventDefault();
        errorEmail.textContent="Entrez votre email";
        errorEmail.style.color="#8d0202";

    }else if(emailValid.test(email.value) == false){
        // VALIDATION REGEX
        errorEmail.textContent = "Format email souhaité nom@domaine.fr";
        errorEmail.style.color="#8d0202";
    }



    //MESSAGE
    if (message.validity.valueMissing) {
        // TEST CHAMP VIDE
        e.preventDefault();
        errorMessage.textContent="Veuillez joindre votre message";      
        errorMessage.style.color="#8d0202";      
    }

}




// ----------EVENTLISTNER INPUT----------------

firstName.addEventListener("input", liveCheck);
prenom.addEventListener("input", liveCheck);
codePostal.addEventListener("input", liveCheck);
// adresse.addEventListener("input", liveCheck);
ville.addEventListener("input", liveCheck);
email.addEventListener("input", liveCheck);
message.addEventListener("input", liveCheck);

function liveCheck(e){
    //NAME
    if(charValid.test(firstName.value)){
        // VALIDATION REGEX
        e.preventDefault();
        firstName.style.color="green";
        errorName.textContent="Valid"
        errorName.style.color="green"
    }else{
        firstName.style.color="#8d0202";
    }

    //PRENOM
    if(charValid.test(prenom.value)){
        // VALIDATION REGEX
        e.preventDefault();
        prenom.style.color="green";
        errorPrenom.textContent="Valid"
        errorPrenom.style.color="green"
    }else{
        prenom.style.color="#8d0202";
    }



    //CODE POSTAL
    if(postalValid.test(codePostal.value)){
        // VALIDATION REGEX
        e.preventDefault();
        codePostal.style.color="green";
        errorCodePostal.textContent="Valid"
        errorCodePostal.style.color="green"
    }else{
        codePostal.style.color="#8d0202";
    }



    // CODE ADRESSE
    if(adresseValid.test(adresse.value)){
        // VALIDATION REGEX
        e.preventDefault();
        adresse.style.color="green";
        errorAdresse.textContent="Valid"
        errorAdresse.style.color="green"
    }else{
        errorAdresse.style.color="#8d0202";
    }




    //VILLE
    if(charValid.test(ville.value)){
        // VALIDATION REGEX
        e.preventDefault();
        ville.style.color="green";
        errorVille.textContent="Valid"
        errorVille.style.color="green"
    }else{
        ville.style.color="#8d0202";
    }


    //EMAIL
    if(emailValid.test(email.value)){
        // VALIDATION REGEX
        e.preventDefault();
        email.style.color="green";
        errorEmail.textContent="Valid"
        errorEmail.style.color="green"
    }else{
        email.style.color="#8d0202";
    }

    //MESSAGE
    if (charValid.test(message.value)) {
        // TEST CHAMP VIDE
        e.preventDefault();
        errorMessage.textContent="Valid";
        errorMessage.style.color="green";
    }
    
    

}

// RESET ALL ERROR MESSAGE
btnReset.addEventListener("click", clickReset);

function clickReset(){
    console.log(allErrorMessage);
    
    allErrorMessage.forEach(span => span.textContent="");
}














// APPEL D' UN API POUR AUTO COMPLET L' ADRESSE (API GOUV.FR)---------

// BUT => QUAND L' UTILISATEUR TAPE SON ADRESSE UNE DATALIST LUI AI PROPOSÉ.
// UNE FOIS QU' IL CLIQUE SUR L' OPTION DE SON CHOIX, LA VILLE ET LE CODE POSTAL DOIVENT
// SE METTRE AUTOMATIQUEMENT DANS LES CHAMPS DE L' INPUTS CODE POSTAL ET VILLE.


const inputSelect = document.querySelector("#input-select")
inputSelect.addEventListener("keyup", adresseAutoComplete);
console.log(inputSelect);


async function adresseAutoComplete() {
    // CUSTOM Q EN FONCTION DE LA VALUE DE L INPUT
    const valueBrut = inputSelect.value; // adresse
    const values = valueBrut.replaceAll(" ", "+")

    //APPEL API
    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${values}&limit=15`);
    // console.log(response);

    // CONVERSION JSON -> JS
    const data = await response.json();

    // LIEU OU CHERCHER LES DATAS
    const dataFeatures = data.features;
    console.log(dataFeatures);



    for(object of dataFeatures){
        // console.log(object.properties);
        // console.log(inputSelect.value.toLowerCase());
        // console.log(object.properties.name.toLowerCase());
        
        // CREATION DES OPTIONS DE LA DATALIST
        if (inputSelect.value.toLowerCase() === object.properties.name.toLowerCase()) {

            
            const datalist = document.querySelector("datalist")
            const option = document.createElement("option")
            datalist.appendChild(option)
    
            option.value= `${object.properties.label}`;
            option.textContent = `${object.properties.label}`;  
            
        }

    }
    
    
    // ATTRIBUTION DES VALEURS DES CHAMPS CODE POSTAL ET VILLE EN FONCTION DU CHAMPS CHOISI DANS LA DATALIST
    adresse.value = inputSelect.value;
    codePostal.value = object.properties.postcode;
    ville.value = object.properties.city;

}







