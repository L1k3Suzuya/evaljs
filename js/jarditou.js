var formValid = document.getElementById('bouton_envoi');
var nom = document.getElementById('nom');
var missNom = document.getElementById('missNom')
var prenom = document.getElementById('prenom');
var missPrenom = document.getElementById('missPrenom');
var email = document.getElementById('email');
var missMail = document.getElementById('missMail');
var code_postal = document.getElementById('code_postal');
var missCode_Postal = document.getElementById('missCode_Postal');
var adresse = document.getElementById('adresse');
var missAdresse = document.getElementById('missAdresse');
var ville = document.getElementById('ville');
var missVille = document.getElementById('missVille');
formValid.addEventListener('click', validation);

function validation(event){
    //Si le champ est vide
    if (nom.validity.valueMissing){
        event.preventDefault();
    if (prenom.validity.valueMissing)
        event.preventDefault();
    if (email.validity.valueMissing)
        event.preventDefault();
    if (code_postal.validity.valueMissing)
        event.preventDefault();
    if (adresse.validity.valueMissing)
        event.preventDefault();
    if (ville.validity.valueMissing)
        event.preventDefault(); 
        missNom.textContent = '* veuillez indiquer votre nom';
        missNom.style.color = 'red';
        missPrenom.textContent = '* veuillez remplir ce champ';
        missPrenom.style.color = 'red';
        missEmail.textContent = '* veuillez remplir ce champ';
        missEmail.style.color = 'red';
        missCode_Postal.textContent = '* veuillez remplir ce champ';
        missCode_Postal.style.color = 'red';
        missAdresse.textContent = '* veuillez remplir ce champ';
        missAdresse.style.color = 'red';
        missVille.textContent = '* veuillez remplir ce champ';
        missVille.style.color = 'red';
    }
} 
function envoiFormulaire() {
    document.monformulaire.submit();
}


