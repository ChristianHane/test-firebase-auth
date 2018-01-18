$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBSRyLZcUwZCqIcBvv3GP2ltQ7RA_uQRTU",
        authDomain: "test-for-auth-78f1a.firebaseapp.com",
        databaseURL: "https://test-for-auth-78f1a.firebaseio.com",
        projectId: "test-for-auth-78f1a",
        storageBucket: "",
        messagingSenderId: "459604740117"
    };
    firebase.initializeApp(config);

    $("#submit").on("click", function(event){
        event.preventDefault();
        var email= $("#email").val();
        var password= $("#password").val();
        var repeatPassword = $("#repeat-password").val();
        if(password === repeatPassword){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(user){
                console.log(user);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    })
    
    $("#sign-in").on("click", function(){
        event.preventDefault();    
        var email = $("#sign-in-email").val();
        var password = $("#sign-in-password").val();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){
            // console.log(user);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            console.log(errorCode);
            // ...
        });
    });
    
    $("#sign-out").on("click", function(){
        event.preventDefault();    
        firebase.auth().signOut().then(function() {
            // console.log("signed out!");
          }).catch(function(error) {
            console.log("something happened with sign out.");
        });
    });

    var displayName;

    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            displayName = user.displayName.val();
            console.log(user);
        } else {
            console.log("no user!");
        }
    });

    console.log(displayName);


    // google login
    $("#google").on("click", function() {
        var provider = new firebase.auth.GoogleAuthProvider();        
        firebase.auth().signInWithRedirect(provider);
    })

    //facebook sign in
    $("#facebook").on("click", function() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    });
});




