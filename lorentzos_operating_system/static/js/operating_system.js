

var close = document.querySelector('.close')

var container = document.querySelector('.container')


var navbar = document.querySelector('.navbar')

var opening = document.querySelector('.opening')

var terminal = document.querySelector('.terminal')
var typing = document.querySelector('.typing')
var calculator = document.querySelector('.calculator')
var opencalculator = document.querySelector('.open-cal')
var closecal = document.querySelector('.close-cal')

var closeweb = document.querySelector('.close-web');

var openWeb = document.querySelector('#openWebsite'); 
var webWindow = document.querySelector('.web'); 
var keybindsWindow = document.querySelector('.keybinds'); 
var jobsWindow = document.querySelector('.jobs'); 



function handleClose() {
  terminal.style.display = 'none'
}


function handleOpening() {
  terminal.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
}




function handleOpenCal() {
  calculator.style.display = 'block'
  container.style.display = 'flex'
  navbar.style.display = 'flex'
}
function handleCloseCal() {
  calculator.style.display = 'none'
}

function handleOpenWeb() {
  webWindow.style.display = 'block'; 
  container.style.display = 'flex'; 
  navbar.style.display = 'flex'; 
}

function handleCloseWeb() {
  webWindow.style.display = 'none'; 
}

function handlemincal() {

  calculator.style.width = '70%';
  calculator.style.height = '430px';
}

function handleOpenKeybinds() {
  keybindsWindow.style.display = 'block'; 
  container.style.display = 'flex'; 
  navbar.style.display = 'flex'; 
}

function handleCloseKeybinds() {
  keybindsWindow.style.display = 'none'; 
}

function handleOpenJobs() {
  jobsWindow.style.display = 'block'; 
  container.style.display = 'flex'; 
  navbar.style.display = 'flex'; 
}

function handleCloseJobs() {
  jobsWindow.style.display = 'none'; 
}



close.addEventListener('click', handleClose)



opening.addEventListener('click', handleOpening)

opencalculator.addEventListener('click', handleOpenCal)
closecal.addEventListener('click', handleCloseCal)
openWeb.addEventListener('click', handleOpenWeb); 
closeweb.addEventListener('click', handleCloseWeb); 

document.querySelector('#openKeybinds').addEventListener('click', handleOpenKeybinds);
document.querySelector('.close-keybinds').addEventListener('click', handleCloseKeybinds);

document.querySelector('#openJobs').addEventListener('click', handleOpenJobs);
document.querySelector('.close-jobs').addEventListener('click', handleCloseJobs);

const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {

  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {

    if (display.value !== '') {

      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {

    display.value = '';
  } else {

    display.value += clickedButtonValue;
  }
}