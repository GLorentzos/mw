

var close = document.querySelector('.close')

var container = document.querySelector('.container')


var navbar = document.querySelector('.navbar')

var opening = document.querySelector('.opening')

var mwai = document.querySelector('.mwai')
var typing = document.querySelector('.typing')

var closeweb = document.querySelector('.close-web');

var openWeb = document.querySelector('#openWebsite'); 
var webWindow = document.querySelector('.web'); 
var keybindsWindow = document.querySelector('.keybinds'); 
var jobsWindow = document.querySelector('.jobs'); 



function handleClose() {
  mwai.style.display = 'none'
}


function handleOpening() {
  mwai.style.display = 'block';
  container.style.display = 'flex';
  navbar.style.display = 'flex';
}




function handleOpenWeb() {
  webWindow.style.display = 'block'; 
  container.style.display = 'flex'; 
  navbar.style.display = 'flex'; 
}

function handleCloseWeb() {
  webWindow.style.display = 'none'; 
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

openWeb.addEventListener('click', handleOpenWeb); 
closeweb.addEventListener('click', handleCloseWeb); 

document.querySelector('#openKeybinds').addEventListener('click', handleOpenKeybinds);
document.querySelector('.close-keybinds').addEventListener('click', handleCloseKeybinds);

document.querySelector('#openJobs').addEventListener('click', handleOpenJobs);
document.querySelector('.close-jobs').addEventListener('click', handleCloseJobs);

const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');



window.addEventListener('load', function() {
  setTimeout(function() {
      handlePreloader();
  }, 2000);
});

function handlePreloader() {
  var preloader = document.querySelector('.preloader');
  if (!preloader) return;
  
  preloader.style.opacity = '0';
  setTimeout(function() {
      preloader.parentNode.removeChild(preloader);
  }, 500);
  
  document.body.classList.add('page-loaded');
}