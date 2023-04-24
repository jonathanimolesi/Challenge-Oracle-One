

document.getElementById('botaoC').addEventListener("click", codificando);
function codificando() {
	var pegar = document.getElementById("textoUm").value;

	pegar = pegar.replace('e', 'enter').replace('i', 'imes').replace('a', 'ai').replace('o', 'ober').replace('u', 'ufat');
	
	document.getElementById("textoDois").innerHTML = pegar;
}

document.getElementById('botaoD').addEventListener("click", descodificando);
function descodificando() {
	var pegar = document.getElementById("textoUm").value;
	
	
	pegar = pegar.replace('enter', 'e');
	pegar = pegar.replace('imes', 'i');
	pegar = pegar.replace('ai', 'a');
	pegar = pegar.replace('ober', 'o');
	pegar = pegar.replace('ufat', 'u');

	document.getElementById("textoDois").innerHTML = pegar;
}


document.getElementById('botaoCopiar').addEventListener("click", copiarTexto);
function copiarTexto() {
	document.querySelector("#textoDois").select();
	document.execCommand("copy");
}
