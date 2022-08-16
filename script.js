const turnOnOff = document.getElementById ('turnOnOff');
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

function lampOnOff(){
  if(turnOnOff.textContent === 'Ligar'){
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else{
    lampOff();
    turnOnOff.textContent = 'Ligar'
  }
}


function lampBroken (){
  lamp.src = './img/quebrada.jpg';
}

function lampNormal (){
  lamp.src = './img/desligada.jpg'
}


turnOnOff.addEventListener('click', lampOnOff)
consert.addEventListener('click', lampNormal)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
