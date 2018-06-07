$('#logBtn').on('click', (e) => {
    // console.log($('#inputEmailSingIn').val(), 'email')
    // console.log($('#inputPasswordSingIn').val(), 'pass');
    fetch('/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: $('#inputEmailSingIn').val(),
            pass: $('#inputPasswordSingIn').val(),
        }),
        dataType: 'json',
    })
        .then((res) => res.json())
        .then(function (res, body) {
            $('#modalSignIn').modal('hide')
        })
});