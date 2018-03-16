var btn = document.getElementsByClassName('button');
	
console.log(btn);
console.log(btn.length);

for (var i = 0; i < btn.length; i++){
	console.log(btn[i].innerText);
}