const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  };

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
  };

const addProperty = (object, newProperty, value) => {
  object[newProperty] = value;
  };
addProperty(lesson2, 'turno', 'noite');

const keysList = (object) => Object.keys(object);

const objectLength = (object) => Object.keys(object).length;

const valuesList = (object) => Object.values(object);

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});;

const numberOfStudents = (object) => {
  let total = 0;
  const keys = Object.keys(object);
  for (index = 0; index < keys.length; index += 1) {
      total += object[keys[index]].numeroEstudantes;
  }
  return total;
};

console.log(numberOfStudents(allLessons));

const getValueByNumber = (obj, position) => {
  const valuesList = Object.values(obj);
  return valuesList[position];
  };

const verifyPair = (object, key, value) => {
  if (object[key] === value) {
    return true;
  } else {
    return false;
  }
};
