let formulario = document.getElementById('formulario'),
    errorDato = document.getElementById('errorDato');


 
function validar(e) {
    e.preventDefault();
    // Input Card#
    if(validator.isEmpty(formulario.cardCode.value,{ignore_whitespace:true})){
        alert("Card# vacio");
        formulario.cardCode.classList.remove('is-valid');
        formulario.cardCode.classList.add('is-invalid');

    }else if(!validator.isNumeric(formulario.cardCode.value,{no_symbols:true})){
        alert('No colocar caracteres diferentes');
        formulario.cardCode.classList.remove('is-valid');
        formulario.cardCode.classList.add('is-invalid');
    }else{
        formulario.cardCode.classList.remove('is-invalid');
        formulario.cardCode.classList.add('is-valid');
    }
    // Input CVC
    if(validator.isEmpty(formulario.cvcCode.value,{ignore_whitespace:true})){
        alert("CVC vacio");
        formulario.cvcCode.classList.remove('is-valid');
        formulario.cvcCode.classList.add('is-invalid');

    }else if(!validator.isNumeric(formulario.cvcCode.value,{no_symbols:true})){
        alert('No colocar caracteres diferentes');
        formulario.cvcCode.classList.remove('is-valid');
        formulario.cvcCode.classList.add('is-invalid');
    }else{
        formulario.cvcCode.classList.remove('is-invalid');
        formulario.cvcCode.classList.add('is-valid');
    }
    // Input Amount
    if(validator.isEmpty(formulario.amount.value,{ignore_whitespace:true})){
        alert("Cantidad vacio");
        formulario.amount.classList.remove('is-valid');
        formulario.amount.classList.add('is-invalid');

    }else if(!validator.isNumeric(formulario.amount.value,{no_symbols:true})){
        alert('No colocar caracteres diferentes');
        formulario.amount.classList.remove('is-valid');
        formulario.amount.classList.add('is-invalid');
    }else{
        formulario.amount.classList.remove('is-invalid');
        formulario.amount.classList.add('is-valid');
    }
    //PostalCode
    if(validator.isEmpty(formulario.postalCode.value,{ignore_whitespace:true})){
        alert("Codigo Postal vacio");
        formulario.postalCode.classList.remove('is-valid');
        formulario.postalCode.classList.add('is-invalid');

    }else if(!validator.isNumeric(formulario.postalCode.value,{no_symbols:true})){
        alert('No colocar caracteres diferentes');
        formulario.postalCode.classList.remove('is-valid');
        formulario.postalCode.classList.add('is-invalid');
    }else{
        formulario.postalCode.classList.remove('is-invalid');
        formulario.postalCode.classList.add('is-valid');
    }
    //FirstName
    if(validator.isEmpty(formulario.firstName.value)){
        alert("Nombre vacio");
        formulario.firstName.classList.remove('is-valid');
        formulario.firstName.classList.add('is-invalid');

    }else if(!validator.isAlpha(formulario.firstName.value)){
        alert('Hay un error en tu nombre');
        formulario.firstName.classList.remove('is-valid');
        formulario.firstName.classList.add('is-invalid');
    }else{
        formulario.firstName.classList.remove('is-invalid');
        formulario.firstName.classList.add('is-valid');
    }
    //LastName
    if(validator.isEmpty(formulario.lastName.value)){
        alert("Apellido vacio");
        formulario.lastName.classList.remove('is-valid');
        formulario.lastName.classList.add('is-invalid');

    }else if(!validator.isAlpha(formulario.lastName.value)){
        alert('Hay un error en tu Apellido');
        formulario.lastName.classList.remove('is-valid');
        formulario.lastName.classList.add('is-invalid');
    }else{
        formulario.lastName.classList.remove('is-invalid');
        formulario.lastName.classList.add('is-valid');
    }
    //State
    if(formulario.state.value=="Pick a State"){
        alert('Seleccione un Estado');
        formulario.state.classList.remove('is-valid');
        formulario.state.classList.add('is-invalid');
    }else{
        formulario.state.classList.remove('is-invalid');
        formulario.state.classList.add('is-valid');
    }
    //City
    if(validator.isEmpty(formulario.city.value)){
        alert("Ciudad vacio");
        formulario.city.classList.remove('is-valid');
        formulario.city.classList.add('is-invalid');

    }else if(!validator.isAlpha(formulario.city.value)){
        alert('Hay un error en la ciudad');
        formulario.city.classList.remove('is-valid');
        formulario.city.classList.add('is-invalid');
    }else{
        formulario.city.classList.remove('is-invalid');
        formulario.city.classList.add('is-valid');
    }

}


formulario.addEventListener("submit",validar);