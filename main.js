let form = document.getElementById("loginForm");

/*import validator from "validator";*/

function validar (e) {

    e.preventDeFault ();
    
    if (!validator.isAlphanumeric (form.Card.value) || validator.isEmpty ( form.Card.value)) { 
        form.Card.focus ();
        form.Card.classList.add("bg-danger");
        form.Card.classList.remove("is-valid");
    } else {
        form.Card.classList.remove("bg-danger");
        form.Card.classList.add("is-valid");
    }

    if (!validator.isAlphanumeric (form.CVC.value) || validator.isEmpty ( form.CVC.value)) { 
        form.Card.focus ();
        form.CVC.classList.add("bg-danger");
        form.CVC.classList.remove("is-valid");
    } else {
        form.CVC.classList.remove("bg-danger");
        form.CVC.classList.add("is-valid");
    }


    }

    if (!form.Amount.value.trim().length > 0){
        enviar = false;
        form.Amount.focus ();
        form.Amount.classList.add("bg-danger");
    } else {
        form.Amount.classList.remove("bg-danger");
        form.Amount.classList.add("is-valid");
    }
    
    if (!form.firstName.value.trim().length > 0){
        enviar = false;
        form.firstName.focus ();
        form.firstName.classList.add("bg-danger");
    } else {
        form.firstName.classList.remove("bg-danger");
        form.firstName.classList.add("is-valid");
    }

    if (!form.lastName.value.trim().length > 0){
        enviar = false;
        form.lastName.focus ();
        form.lastName.classList.add("bg-danger");
    } else {
        form.lastName.classList.remove("bg-danger");
        form.lastName.classList.add("is-valid");
    }

    if (!form.City.value.trim().length > 0){
        enviar = false;
        form.City.focus ();
        form.City.classList.add("bg-danger");
    } else {
        form.City.classList.remove("bg-danger");
        form.City.classList.add("is-valid");
    }

    if (!form.inputState.value.trim().length > 0 ){
        enviar = false;
        form.inputState.focus ();
        form.inputState.classList.add("bg-danger");
    } else {
        form.inputState.classList.remove("bg-danger");
        form.inputState.classList.add("is-valid");
    }

    if (!form.postalCode.value.trim().length > 0){
        enviar = false;
        form.postalCode.focus ();
        form.postalCode.classList.add("bg-danger");
    } else {
        form.postalCode.classList.remove("bg-danger");
        form.postalCode.classList.add("is-valid");
    }
    

    return enviar;
}