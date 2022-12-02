const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const withOutSpecialCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9"]

let newPasswordOne = document.getElementById("newPasswordOne")
let switchEl = document.getElementById("switch")
let specialCharacters = false
newPasswordOne.textContent = ""
let messageEl = document.getElementById("message-el")


// keep track of if the toggle is on or off

switchEl.addEventListener("click", function(){
    if(specialCharacters === false){
        specialCharacters = true
    } else if(specialCharacters === true){
        specialCharacters = false
    }
})

function createPassword(){
    let password =""
    if(specialCharacters === true){
        for(let i = 0; i < 15; i++){
            let randomIndex = Math.floor(Math.random()*characters.length)
            password += characters[randomIndex]
        }
        return password
    } else {
        for(let i = 0; i < 15; i++){
            let randomIndex = Math.floor(Math.random()* withOutSpecialCharacters.length)
            password +=  withOutSpecialCharacters[randomIndex]
        }
        return password
    }

    
}


function generate(){
newPasswordOne.textContent = createPassword()
}



function copyOne(){
    if(newPasswordOne.textContent !== ""){
        let copyText = document.getElementById("newPasswordOne")
        navigator.clipboard.writeText(copyText.textContent);
        messageEl.textContent = "Pasword copied successfully!"
    }

}


