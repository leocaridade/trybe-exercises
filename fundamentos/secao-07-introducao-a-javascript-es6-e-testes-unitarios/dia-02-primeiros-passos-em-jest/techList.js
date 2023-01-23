const techList = (array, name) => {
    let obj = [];
    const sortArray = array.sort();
    if (array.length === 0) {
        return 'Vazio!';
    } else {
        for (index = 0; index < array.length; index += 1) {
            obj.push({
                tech: sortArray[index],
                name: name
            });
        }
        return obj;
    }
};

module.exports = techList;