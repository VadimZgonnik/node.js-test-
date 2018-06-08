$('#regBtn').on('click', (e) => {
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