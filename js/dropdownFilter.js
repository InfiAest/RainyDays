const fitChecklist = document.getElementById('list1');
const sizeChecklist = document.getElementById('list2');
const colourChecklist = document.getElementById('list3');
const starChecklist = document.getElementById('list4');

fitChecklist.getElementsByClassName('fit-anchor')[0].onclick = function(evt) {
  if (fitChecklist.classList.contains('visible'))
  fitChecklist.classList.remove('visible');
  else
  fitChecklist.classList.add('visible');
}

sizeChecklist.getElementsByClassName('size-anchor')[0].onclick = function(evt) {
    if (sizeChecklist.classList.contains('visible'))
    sizeChecklist.classList.remove('visible');
    else
    sizeChecklist.classList.add('visible');
}

colourChecklist.getElementsByClassName('colour-anchor')[0].onclick = function(evt) {
    if (colourChecklist.classList.contains('visible'))
    colourChecklist.classList.remove('visible');
    else
    colourChecklist.classList.add('visible');
}

starChecklist.getElementsByClassName('star-anchor')[0].onclick = function(evt) {
    if (starChecklist.classList.contains('visible'))
    starChecklist.classList.remove('visible');
    else
    starChecklist.classList.add('visible');
}