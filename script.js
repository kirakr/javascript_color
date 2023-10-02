// JavaScript

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');


function changeColor(){
  document.body.style.backgroundColor = color.value;


  if (color.value === '#ffffff') {
    text.textContent = 'コード：' + color.value + '(white)';
  } else if (color.value === '#000000') {
    text.textContent = 'コード：' + color.value + '(black)';
  } else {
    text.textContent = 'コード：' + color.value;
  }

}

color.addEventListener('input', changeColor);