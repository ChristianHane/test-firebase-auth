$("#submit").on("click", function(){
    var newUser = {
        firstName: $("#first-name").val(),
        lastName: $("#last-name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        repeatPassword: $("repeat-password").val()
    }
    if(newUser.password === newUser.repeatPassword){
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
})

$("#sign-in").on("click", function(){
    var email = $("#sign-in-email").val();
    var password = $("#sign-in-password").val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
})

$("#sign-out").on("click", function(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
    });
})
