let errors = {};

function singUpBtn() {
    validate();
	
};

function validate() {
    errors = {};

    validateLogin();
    validatePasswordOne();

    displayErrors();
};

function validateLogin() {
    let login = document.getElementById('login');
    errors.login = [];
    
    
    if (login.value === '') {
        errors.login.push('Введите логин');
		
	}

    if (errors.login.length) {
        login.classList.add('input_error');
    } else {
        login.classList.remove('input_error');
    }
    
};

function validatePasswordOne() {
    let password = document.getElementById('passwordOne');
    errors.passwordOne = [];

	if (password.value === '') {
        errors.passwordOne.push('Введите пароль');
	}

    if (errors.passwordOne.length) {
        password.classList.add('input_error');
    } else {
        password.classList.remove('input_error');
    }
};

function displayErrors() {
    let items = [];
    const keys = ['login', 'passwordOne' ];

    keys.forEach(key => {
        if (errors.hasOwnProperty(key)) {
            items = [...items, ...errors[key]];
        } 
    });
    if (items.length) {
        document.getElementById('submit__error').innerHTML = items[0];
    } else {
        document.getElementById('submit__error').innerHTML = '';
    }

    
};

function loginInputHandler(e) {
    validateLogin();
    displayErrors();
};

function passwordOneInputHandler(e) {
    validatePasswordOne();
    displayErrors();
};

