const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    let charNum = characters.length
    let password = ""

    for (i=1; i < 16; i++) {
        password += characters[Math.floor(Math.random() * charNum)];

    }
    console.log(password)
    return password;
    
}

function newPasswords() {
    let passwordEl1 = document.getElementById("password1-el")
    let passwordEl2 = document.getElementById("password2-el")

    passwordEl1.textContent = generatePassword()
    passwordEl2.textContent = generatePassword()
}