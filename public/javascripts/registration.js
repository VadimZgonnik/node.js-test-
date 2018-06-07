$('#regBtn').on('click', (e) => {
    // e.preventDefault();
    // console.log(registrationEmail.value, 'email')
    // console.log(registrationPass.value, 'pass');
    // console.log(e.target.serializeArray(), 'confPass');
    fetch('/users/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: $('#inputEmailSingUp').val(),
            pass:  $('#inputPasswordSingUp').val(),
            confirmPass: $('#inputConfirmPasswordSingUp').val(),
        }),
        dataType: 'json',
    })
        .then((res) => res.json())
        .then(function (res, body) {
            $('#modalSignUp').modal('hide')
        })
});