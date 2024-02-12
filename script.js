// JQuery Code Here
//wrap code in ready method

//select document object, called docready, with a callback function

$(document).ready(function () {
    console.log("DOM is ready to be manipulated")

    //animate the forms appearance

    $('#registration-form').hide().fadeIn(2000);
    //handle form submission

    $('#signup-form').submit(function(event){

        //stops the page from refreshing once form is submitted
        event.preventDefault();

        
        let name = $('#name').val().trim();
        console.log(name);
        let email = $('#email').val().trim();
        console.log(email);
        let date = $('#date').val();
        console.log(date);
        let isValid = true;

        if( name== ""){
            alert("Please enter your name!!!");
            isValid = false;
        }
        if( email == ""){
            alert("ENTER UR EMAIL");
            isValid = false;
        }
        if (date == "" ){
            alert("Please SELECT a date");
            isValid = false;
        }

        if(isValid) {
            $('#confirmation-message').slideUp(function () {
                $(this).html(`
                    <p>Thank you, <strong>${name}</strong></p>
                    <p>Your registration for the show on <strong>${date}</strong> is confirmed</p>
                    <p>A confirmation email has been sent to: <storng> ${email} </strong></p>
                `)
                .slideDown();
                
                // confirmation message fades out after 2 seconds
                setTimeout(function() {
                  $('#confirmation-message').fadeOut(2000);  
                  }, 5000);
            });

            //clear form fields after
            $('#signup-form').find("input[type=text], input[type=email], select").val("");
        }
    });

    // form feild animations
   $("input, select").focus(function () {
        $(this).animate(
            {
                borderColor: "#68b3c8"
            }, 500
        )
   }).blur(function () {
        $(this).animate(
            {
                borderColor: "#ddd"
            },500
        )
   })

   // submit animation
   $("signup-form input[type=submit]").hover(
    function(){
        $(this).animate(
            {
                backgroundColor: jQuery.Color("#333333"),
            }, 200
        );
    },
    function () {
        $(this).animate(
            {
                backgroundColor: jQuery.Color("#5c5c5c"),
            }, 200
        )
    }
   )

});