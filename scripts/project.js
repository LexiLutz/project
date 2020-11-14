

const clicker = document.querySelector('#special');
const appear = document.querySelector('#rome');
// hide the image
appear.style.display = 'none';
const div = document.querySelector('#caption');

// event handler
clicker.onclick = () => {
   appear.style.display = 'block';
   div.style.display = 'none';
};

// another event handler
appear.onclick = () => {
   appear.style.display = 'none';
   div.style.display = 'block';

};
const place = document.querySelector('#village');
const divp = document.querySelector('div p');


//
const text1 = "Mouse over the image to see a change.";
const text2 = "Now mouse out to return the image to its first position.";

// NOTE that two CLASSES are defined in the CSS:
// .rotate-right
// .rotate-left
// these make the code below work
place.onmouseenter = (e) => {
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   // change text
   divp.textContent = text2;
};
place.onmouseleave = (e) => {
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   // change text back
   divp.textContent = text1;
};
