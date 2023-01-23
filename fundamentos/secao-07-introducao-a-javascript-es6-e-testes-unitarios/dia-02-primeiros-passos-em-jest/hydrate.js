const hydrate = (string) => {
 const splitString = string.split('');
 let glassOfWater = 0;
 for (index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
        glassOfWater += parsedCharacter;
    }
 }

 if (glassOfWater === 1) {
    return (`${glassOfWater} copo de água`);
 } else {
    return (`${glassOfWater} copos de água`);
 }
 
};

module.exports = hydrate;