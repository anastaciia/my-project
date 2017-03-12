$(function() {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/wanderingknight13@gmail.com",  
            method: "POST",
            data: {
                 ClientName: $('#client-name').val(),
                 ClientEmail: $('#client-email').val(),
                 Comment: $('#comment').val()
            },
             dataType: "json"
        })     
        .done(function() {
            $('form').html('<h1>Thank you!</h1>');
        });
    });
});

