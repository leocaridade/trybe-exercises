document.getElementById('header-container').style.backgroundColor = 'green';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'lightsalmon';

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

document.getElementById('footer-container').style.backgroundColor = 'darkgreen';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
    for (index = 0; index < emergencyTasksHeaders.length; index += 1) {
        emergencyTasksHeaders[index].style.backgroundColor = 'purple';
    }

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
    for (index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
        noEmergencyTasksHeaders[index].style.backgroundColor = 'black';
    }