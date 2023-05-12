var arry = ['yellow', 'Green', 'orange', 'Red', 'Pink', 'chocolate', 'Brown', 'Blue', 'Black', 'skyblue', 'Grey', 'greenyellow'];

var button=document.getElementById('bot')
var colo=document.getElementById('colo')
var ind=document.getElementById('ind')
var number=document.getElementById('number')

button.addEventListener('click',random)

function random(){

    var no = Math.floor((Math.random() * 11) + 1)
    var se=arry[no]

    colo.style.backgroundColor=se
ind.style.color=se

number.innerText='Index of color is '+no



}