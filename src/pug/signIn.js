document.addEventListener('DOMContentLoaded', start);

function start() {
	let login = document.getElementById('login');
	
	login.addEventListener('focus', () => {
		login.classList.remove('input_error');
	}, 
	true);
	let password = document.getElementById('password');
	password.addEventListener("focus", () => {
		password.classList.remove('input_error');
		document.getElementById('submit__error').innerHTML = '';
	}, 
	true);
};

function signInBtn() {
	let login = document.getElementById('login');
	let password = document.getElementById('password');
	if (login.value === '') {
		login.classList.add('input_error');
	}
	if (password.value === '') {
		password.classList.add('input_error');
		document.getElementById('submit__error').innerHTML = 'Пароль содержит недопустимые символы';
	}
};