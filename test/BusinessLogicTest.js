function onButtonPress(name){


    if (!checkName(name)){
        return false;
    }
    const indexOfSpace = name.indexOf(" ");

    const firstName = name.substring(0, indexOfSpace);
    const secondName =name.substring((indexOfSpace+1),name.length);

    console.log(firstName, secondName);
    return true;
}

function checkName(name){
    const specialCharacters = ["1","2","3","4","5","6","7","8","9","0",
                                "!","@","£","$","%","^","&","*","(",")","_","+","=",
                                "{","}","[","]",";",":","|","<",">",",",".",
                                "\"","'","`","~","±","§","€","/","\\"]

    if (name === "") {
        throw new Error("ERROR: You must enter a name");
        return false;   
    }
    if (name.indexOf(" ") === -1){
        throw new Error("ERROR: You must enter a first name and a second name separted with a space");
        return false;
    }
    let error = true;

    specialCharacters.map(char => {
        if (name.indexOf(char) > -1){
            error = false;
            return error;
         }
        return error;
    });

    if (error === false) {
        throw new Error("ERROR: Your name must not contain numbers or special characters");
        return false;   
    }

    return true;
}

module.exports = {
  onButtonPress,
  checkName
};