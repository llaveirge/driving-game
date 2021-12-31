var data = {
  direction: 'east'
};

var $car = document.getElementById('car');
var $carDirection = $car.getAttribute('data-direction');

data.direction = $carDirection;
