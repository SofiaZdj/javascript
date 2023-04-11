let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let mailError = document.getElementById("mail-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]* &/)){
        nameError.innerHTML = "Write full name";
        return false;
    }


    nameError.innerHTML = "valid";
    return true;

}