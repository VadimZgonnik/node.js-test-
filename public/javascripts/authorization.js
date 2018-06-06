$('#logBtn').on('click', (e) => {
    // e.preventDefault();
    // console.log(registrationEmail.value, 'email')
    // console.log(registrationPass.value, 'pass');
    // console.log(e.target.serializeArray(), 'confPass');
    fetch('/users/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: $('#inputEmailSingUp').val(),
            pass: $('#inputPasswordSingUp').val(),
        }),
        dataType: 'json',
    })
        .then((res) => res.json())
        .then(function (res, body) {
            $('#modalSignIn').modal('hide')
        })
});