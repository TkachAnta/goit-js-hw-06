const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const mail = formElement.email.value;
    const password = formElement.password.value;

    if (mail === '' || password === '') {
        alert('Всі поля повинні бути заповнені!');
    } else {
        const formData = {
            mail,
            password,
        };
        console.log(formData);

        form.reset();
    };
};

