let plusBtn =document.querySelector('.btn');
let removeBtn =document.querySelector('.trash');
let clearAllBtn=document.querySelector('.btn2');
let listItem =document.querySelector('.list');
let inputField =document.querySelector('#inputBox');
let addSoundEff =document.getElementById('addSound');
let trashSoundEff =document.getElementById('trashCan');
let pophover =document.querySelector('.pop');

// inputField

inputField.onkeyup =()=>{
let userData =inputField.value;

if(userData.trim() !=0){
	plusBtn.classList.add('active');
	
}else{
	plusBtn.classList.remove('active');
	
}

}

// plus button click

plusBtn.onclick=()=>{

let userData =inputField.value;
let getlocalStorge =localStorage.getItem('new todo');
let listArr;
if(getlocalStorge == null){
	 listArr =[];
}else{
	listArr=JSON.parse(getlocalStorge);
};
listArr.push(userData);
localStorage.setItem('new todo', JSON.stringify(listArr));
showTask();

addSoundEff.play();


}

// refresh after undelete

showTask();

// show list item

function showTask(){
let getlocalStorge =localStorage.getItem('new todo');
if(getlocalStorge == null){
	 listArr =[];
}else{
	listArr=JSON.parse(getlocalStorge);
};


let countArr =document.querySelector('.count');

countArr.textContent=listArr.length;


let newLitag ='';
listArr.forEach((element, index) =>{
newLitag +=`<li> ${element}  <button onclick="deleteList(${index})" class="trash"><i class="fa fa-trash"></i></button> </li>`;
});
listItem.innerHTML =newLitag;
inputField.value='';
};


// delete particular li
function deleteList(index){
let getlocalStorge =localStorage.getItem('new todo');
	listArr=JSON.parse(getlocalStorge);
	listArr.splice(index, 1);
	localStorage.setItem('new todo', JSON.stringify(listArr));
	showTask();

	trashSoundEff.play();

}

clearAllBtn.onclick=()=>{
listArr=[];
localStorage.setItem('new todo', JSON.stringify(listArr));
	showTask();
	trashSoundEff.play();
}

function closeTime(){
	pophover.style.display="none";
	pophover.style.overflow="scroll";
}

 function showpop(){
	 pophover.style.display="block";
	 pophover.style.overflow="hidden";
 }

 function closeBtn(){
	pophover.style.display="none";
	 pophover.style.overflow="scroll";
}



setTimeout(showpop,2000);
