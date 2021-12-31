var data = {
  direction: 'east'
};

var $car = document.getElementById('car');
var $carDirection = $car.getAttribute('data-direction');
data.direction = $carDirection;

function turnCar(event) {
  if (event.code === 'ArrowLeft') {
    $car.setAttribute('data-direction', 'west');
    data.direction = 'west';
  } else if (event.code === 'ArrowUp') {
    $car.setAttribute('data-direction', 'north');
    data.direction = 'north';
  } else if (event.code === 'ArrowDown') {
    $car.setAttribute('data-direction', 'south');
    data.direction = 'south';
  } else if (event.code === 'ArrowRight') {
    $car.setAttribute('data-direction', 'east');
    data.direction = 'east';
  }
}

document.addEventListener('keydown', turnCar);
