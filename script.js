function nav(){
	if(window.scrollY >= 441){
		document.querySelector('#navegacao').classList.remove('nav1');
		document.querySelector('#navegacao').classList.add('nav2');
	}else{ 
		document.querySelector('#navegacao').classList.remove('nav2');
		document.querySelector('#navegacao').classList.add('nav1');
	}
}
window.addEventListener('scroll',nav);

function sobreMim(){
	if(window.scrollY >= 400){
		document.querySelector('#sobre').classList.remove('sobreMim');
		document.querySelector('#sobre').classList.add('sobreMim2');
	}else{ 
		document.querySelector('#sobre').classList.remove('sobreMim2');
		document.querySelector('#sobre').classList.add('sobreMim');
	}
}

window.addEventListener('scroll',sobreMim);

function sobremim(){
	
	window.scrollTo({
		top: 600,
		behavior: 'smooth'
	});
	
}
function projetos(){
	window.scrollTo({
		top: 1310,
		behavior: 'smooth'
	});
}
function contato(){
	window.scrollTo({
		top: 2000,
		behavior: 'smooth'
	});
}