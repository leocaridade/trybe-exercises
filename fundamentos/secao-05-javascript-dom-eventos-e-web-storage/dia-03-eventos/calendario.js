const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Parte 1.
  const ulDays = document.getElementById('days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];  

  for (index = 0; index < decemberDaysList.length; index += 1) {
    const li = document.createElement('li');
    li.className = 'day';
    li.innerHTML = decemberDaysList[index];
    ulDays.appendChild(li);
    if (decemberDaysList[index] == 24 || decemberDaysList[index] == 25 || decemberDaysList[index] == 31) {
        li.className += ' holiday';
    }
    if (decemberDaysList[index] == 4 || decemberDaysList[index] == 11 || decemberDaysList[index] == 18 || decemberDaysList[index] == 25) {
        li.className += ' friday';
    }
  }
  
  //Parte 2
  const createButton = (buttonName) => {
    const divBtn = document.querySelector('.buttons-container');
    const newButton = document.createElement('button');
    newButton.id = 'btn-holiday';
    newButton.innerHTML = buttonName;
    divBtn.appendChild(newButton);
  };
  createButton('Feriados');

  //Parte 3
  const holidaysColorChange = () => {
    const holidays = document.getElementsByClassName('holiday');
    const holidayBtn = document.getElementById('btn-holiday');
    const backgroundColor = 'rgb(238,238,238)';
    const setNewColor = 'white';

    holidayBtn.addEventListener('click', () => {
      for (index = 0; index < holidays.length; index += 1) {
        if (holidays[index].style.backgroundColor === setNewColor) {
          holidays[index].style.backgroundColor = backgroundColor;
        } else {
          holidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
    holidaysColorChange();

    //Parte 4
    const fridayBtn = (day) => {
      const fridayButton = document.createElement('button');
      fridayButton.id = 'btn-friday';
      fridayButton.innerHTML = day;
      const buttonsContainer = document.querySelector('.buttons-container');
      buttonsContainer.appendChild(fridayButton);
    };
    fridayBtn('Sexta-feira');

    //Parte 5
    const changeFridayText = (fridaysArray) => {
      const fridays = document.getElementsByClassName('friday');
      const fridayBtn = document.getElementById('btn-friday');
      const fridayText = 'Friday';
      
      fridayBtn.addEventListener('click', () => {
        for (index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerHTML !== fridayText) {
          fridays[index].innerHTML = fridayText;
        } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
      });
    }
    let decemberFridays = [4, 11, 18, 25];
    changeFridayText(decemberFridays);

    //Parte 6
    const zoomOver = () => {
      const days = document.getElementById('days');
        days.addEventListener('mouseover', (event) => {
          event.target.style.fontSize = '30px';
          event.target.style.fontWeigth = '600';
        });
    }

    const zoomOut = () => {
      const days = document.getElementById('days');
      days.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeigth = '200';
      });
    }
    zoomOver();
    zoomOut();

    //Parte 7
    const addTask = (task) => {
      let tarefa = document.createElement('span');
      let taskDiv = document.querySelector('.my-tasks');
      tarefa.innerHTML = task;
      taskDiv.appendChild(tarefa);
    }
    addTask('Estudar');