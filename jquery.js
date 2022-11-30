$(document).ready(function() {
    $("#frm1").validate({
        rules: {
            number1 : {
                required : true,
            },
            number2 : {
                required : true,
            },
            math : {
                required : true
            },
            fname : {
                required : true,
            },
            lastname : {
                required : true,
            },
            username : {
                required : true,
                minlength: 3
            },
            email : {
                required : true,
                email : true
            },
            bday : {
                required : true
            },
            gender : {
                required : true
            }
        },
        messages: {
            uname : {
                minlength : "please type 3 or more character"
            },
            email : {
                email: "The email should be in the format: abc@domain.tld"
            },
            gender : {
                required : "Please choose if your Male or Female"
            },
            math : {
                required : "Please choose your Operator"
            }


        }
    });
  });