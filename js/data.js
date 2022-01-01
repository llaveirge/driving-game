var data = {
  direction: 'east'
};

var previousDirectionJSON = localStorage.getItem('data-local-storage');
var $carData = document.getElementById('car');
var previousData = JSON.parse(previousDirectionJSON);

function maintainDirection(event) {
  $carData.setAttribute('data-direction', previousData.direction);
  data.direction = previousData.direction;
}

window.addEventListener('DOMContentLoaded', maintainDirection);

function beforeUnloadHandler(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-local-storage', dataJSON);
}

window.addEventListener('beforeunload', beforeUnloadHandler);
