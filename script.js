const turOn = document.getElementById ('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const consert = document.getElementById('consert')

function isLampBroken (){
  return lamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
  if(!isLampBroken ()) {
  lamp.src='./img/ligada.jpg'
  }
}

function lampOff (){
  if(!isLampBroken ()) {
  lamp.src='./img/desligada.jpg';
  }
}


function lampBroken (){
  lamp.src = './img/quebrada.jpg';
}

function lampNormal (){
  lamp.src = './img/desligada.jpg'
}

turOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
consert.addEventListener('click', lampNormal)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
