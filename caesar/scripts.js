
function formSubmit() {
    var inputMessage = document.getElementById("textarea").value;
    var inputShift = document.getElementById("input").value;
    document.getElementById("encodedMessage").innerHTML = ceaserCipher(inputMessage, inputShift);
}

function isUppercase(str) {
    return str === str.toUpperCase();
}

function isJunk(str) {
    if (str.match(/[a-z]/i) === null) {
        return true;
    }
    return false;
}

function ceaserCipher(str, key) {
    let decipher = "";
    for (let i = 0; i < str.length; i++) {
        if (isJunk(str[i])) {
            decipher += str[i];
        } else if (isUppercase(str[i])) {
            decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
        } else {
            decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }
    return decipher;
}

