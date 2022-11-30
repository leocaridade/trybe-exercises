let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log('Bem-vinda, ' + info.personagem);

  info['recorrente'] = 'Sim';
//   console.log(info);

// for (let key in info) {
//     console.log(key);
// }

// for (let key in info) {
//     console.log(info[key]);
// }

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info) {
    if (info[key] != info2[key]) {    
    console.log(info[key] + ' e ' + info2[key]);
    } else {
        console.log('Ambos recorrentes');
    }
}