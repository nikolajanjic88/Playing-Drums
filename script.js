const crashRide = document.querySelector('#crash-ride');
const hiHatTop = document.querySelector('#hihat-top');
const drumKeys = document.querySelectorAll('.key');

window.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode;
  const keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

  if(!keyElement) return;
   
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();

  switch(keyCode) {
    case 69:
    case 82:
      animateCrashOrRide();
      break;
    case 75:
    case 73:
      animateHiHatClosed();
      break;
  }
  keyElement.classList.add('playing');
});

drumKeys.forEach((key) => {
  key.addEventListener('transitionend', removeKeyTransition);
});
crashRide.addEventListener('transitionend', removeCrashRideTransiotion);
hiHatTop.addEventListener('transitionend', removeHiHatTopTransiotion);


function animateCrashOrRide() {
  crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}

function animateHiHatClosed() {
  hiHatTop.style.top = '171px';
}

function removeCrashRideTransiotion(e) {
  if(e.propertyName !== 'transform') return;
  e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

function removeHiHatTopTransiotion(e) {
  if(e.propertyName !== 'top') return;
  e.target.style.top = '166px';
}

function removeKeyTransition(e) {
  if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
