function validateAndRedirect() {
    if (validate()) {
        window.location.href = "main.html";
    }
}

function imageSizeValidation(){
    let imageInput = document.querySelector('input[type="file"]');
    let image = imageInput.files[0];
    let limit = 2000;
    let size = image.size/1024;
    if(size > limit){
        return false
    }
    return true
}

function validate(){

    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let pw = document.getElementById("password");
    let cpw = document.getElementById("confirm-password");
    let age = document.getElementById("age");
    let favgenre = document.getElementById("genre");
    let male = document.getElementById("check-male");
    let female = document.getElementById("check-female");
    let other = document.getElementById("check-other");
    let image = document.querySelector('input[type="file"]');
    let imageInputted = image.files[0];

    if(email.value == "" || username.value == ""|| pw.value == "" || cpw.value == "" || favgenre.value == ""){
        alert("Please fill in every fields!");
        return false;
    } else if (email.value.endsWith("@gmail.com") == false){
        alert("Email Must End with @gmail.com");
        return false;
    } else if (isAlphaNum(username.value) == false){
        alert("Username must be Alphanumeric");
        return false;
    } else if (username.value.length <= 5){
        alert("Username must be more than 5 letters");
        return false;
    } else if (pw.value.length <= 5){
        alert("Password must be more than 5 letters");
        return false;
    } else if (isAlphaNum(pw.value) == false){
        alert("Password must be Alphanumeric");
        return false;
    } else if (pw.value != cpw.value){
        alert("Passwords are not matched!");
        return false
    } else if (age < 1 || age > 100){
        alert("Please use your real age");
        return false
    } else if (!male.checked && !female.checked && !other.checked){
        alert("Please select your gender");
        return false
    } else if (!imageInputted){
        alert("Upload a profile picture!");
        return false
    } else if (imageSizeValidation() == false){
        alert("Image file is too large");
        return false
    }
    return true
}

function isAlphaNum(element){
    for(let i = 0; i < element.length; i++){
        if(element[i] >= 'a' && element[i] <= 'z'){
            continue;
        } else if (element[i] >= 'A' && element[i] <= 'Z'){
            continue;
        } else if (element[i] >= '0' && element[i] <= '9') {
            continue;
        } else {
            return false
        }
    }
    return true;
}