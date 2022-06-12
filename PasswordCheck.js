

const checkPasswords = () => {
    let char = false;
    let num = false;
    let cap = false;
    const password1 = document.getElementById("Password").value;
    const passwordCaps = password1.toUpperCase();
    if (password1.length >= 8) {
        for (let i = 0; i < password1.length; i++) {
            if (isNaN(password1[i]) === true && password1[i] != passwordCaps[i]){
                char = true;
            } else if (isNaN(password1[i]) === false && password1[i] === passwordCaps[i]){ // if NaN() is not false then this will run
                num = true;
            }
            // Compare normal password and all caps to see if it contains capital letters
            if (password1[i] === passwordCaps[i] && isNaN(password1[i]) === true) {
                cap = true;
            }
        }
    } else {
        document.getElementById("Password").style.borderBottomColor = "red";
        document.getElementById("htmlPasswordInput").innerHTML = `Length is too short. Current length: ${password1.length}`;
        document.getElementById("htmlPasswordInput").style.color = "red";
        return;
    }
    if (char === true && num === true && cap === true) {
        document.getElementById("Password").style.borderBottomColor = "green";
        document.getElementById("htmlPasswordInput").innerHTML = "Password is strong";
        document.getElementById("htmlPasswordInput").style.color = "green";
    } else {
        document.getElementById("Password").style.borderBottomColor = "red";
        document.getElementById("htmlPasswordInput").innerHTML = "Password is not strong";
        document.getElementById("htmlPasswordInput").style.color = "red";
    }
}
    

