var browserName = 'Mozilla';

var myImage = document.querySelector('img');

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var storedName = updateHeading();

myButton.onclick = function() {
  storedName = setUserName();
}



myImage.onclick = function()
{
	var mySRC = myImage.getAttribute('src');
	if(mySRC === 'images/firefox-logo.png')
	{
		browserName = "Chrome";
		myImage.setAttribute('src', 'images/chrome-logo.png');
	}
	else
	{
		browserName = "Mozilla";
		myImage.setAttribute('src', 'images/firefox-logo.png')
	}
	
	myHeading.textContent = browserName + ' is cool, ' + storedName;	
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  return myName;
}

function updateHeading()
{
	if(!localStorage.getItem('name')) {
		return setUserName();
	} else {
	  var storedName = localStorage.getItem('name');
	  myHeading.textContent = browserName + ' is cool, ' + storedName;
	  return storedName;
	}
}