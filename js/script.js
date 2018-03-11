window.onload = function() {
	console.log('The page is fully loaded.');

	var btn = document.getElementsByClassName('button');
	
	console.log(btn);
	console.log(btn.length);

	for (i = 0; i < btn.length; i++){
		console.log(btn[i].innerText);
	}
}