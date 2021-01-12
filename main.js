let form = document.getElementById("loginForm");

function validar (e){

    e.preventDefault();

    if (!validator.isCreditCard (form.Card.value) || validator.isEmpty ( form.Card.value)) { 
        form.Card.focus ();
        form.Card.classList.add("bg-danger");
        form.Card.classList.remove("is-valid");
    } else {
        form.Card.classList.remove("bg-danger");
        form.Card.classList.add("is-valid");
    }

    if (!!validator.isNumeric (form.CVC.value) || validator.isEmpty ( form.CVC.value)) { 
        form.CVC.focus ();
        form.CVC.classList.add("bg-danger");
        form.CVC.classList.remove("is-valid");
    } else {
        form.CVC.classList.remove("bg-danger");
        form.CVC.classList.add("is-valid");
    }

    if (!validator.isNumeric (form.Amount.value) || validator.isEmpty (form.Amount.value)) { 
        form.Amount.focus ();
        form.Amount.classList.add("bg-danger");
        form.Amount.classList.remove("is-valid");
    } else {
        form.Amount.classList.remove("bg-danger");
        form.Amount.classList.add("is-valid");
    }
   
    if (!validator.isAlpha (form.firstName.value) || validator.isEmpty (form.firstName.value)) { 
        form.firstName.focus ();
        form.firstName.classList.add("bg-danger");
        form.firstName.classList.remove("is-valid");
    } else {
        form.firstName.classList.remove("bg-danger");
        form.firstName.classList.add("is-valid");
    }

    if (!validator.isAlpha (form.lastName.value) || validator.isEmpty (form.lastName.value)) { 
        form.lastName.focus ();
        form.lastName.classList.add("bg-danger");
        form.lastName.classList.remove("is-valid");
    } else {
        form.lastName.classList.remove("bg-danger");
        form.lastName.classList.add("is-valid");
    }

    if (!validator.isAlpha (form.City.value) || validator.isEmpty (form.City.value)) { 
        form.City.focus ();
        form.City.classList.add("bg-danger");
        form.City.classList.remove("is-valid");
    } else {
        form.City.classList.remove("bg-danger");
        form.City.classList.add("is-valid");
    }

    if (validator.isEmpty (form.inputState.value)) { 
        form.inputState.focus ();
        form.inputState.classList.add("bg-danger");
        form.inputState.classList.remove("is-valid");
    }

    if (!validator.isNumeric (form.postalCode.value) || validator.isEmpty (form.postalCode.value)) { 
        form.postalCode.focus ();
        form.postalCode.classList.add("bg-danger");
        form.postalCode.classList.remove("is-valid");
    } else {
        form.postalCode.classList.remove("bg-danger");
        form.postalCode.classList.add("is-valid");
    }

    if (validator.isEmpty (form.weAcept.value)) { 
        form.inputState.focus ();
        form.inputState.classList.add("bg-danger");
        form.inputState.classList.remove("is-valid");
    }
}

form.addEventListener("submit", validar);