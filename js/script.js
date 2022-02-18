let lox = document.querySelector(".burger__top")

function lohClick(){
	alert("---------> Loh <--------- \nCHECK CONSOLE")
	let a = "Ty vseodno loh"
	let b = "______________"
	num = 9
	for (var i = 0; i <= num; i++) {
		i++
		console.log(a)
		console.log(b)
	}
	console.log(a)
}


lox.addEventListener('click', lohClick)