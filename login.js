document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    if (email === 'gayathri@gmail.com' && password === 'Gayathri') {
        window.location.href = 'calc.html';
    }
    else {
        alert('Incorrect email or password!');
    }
})