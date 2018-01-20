// trailAPI action
/*
notes on query string params:
limit=25 - how many results to return
q[activities_activity_type_name_eq]=hiking - searches by activity, not sure what the options are.
q[city_cont]=Los+Angeles - the city to search for
q[state_cont]=California - state to search in
radius=25 - radius to search in, value in miles
*/
// activities: hiking, mountain biking,

$("#search-butt").on("click", function(event) {
    event.preventDefault();
    var search;
    var lat;
    var lng;
    var radius = $("#radius").val();
    search = $("#search").val();
    console.log(search);
    
    //user login with email
    $("#sign-in").on("click", function(){
        event.preventDefault();    
        var email = $("#sign-in-email").val();
        var password = $("#sign-in-password").val();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){
            console.log(user);
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

    // google login
    $("#google").on("click", function() {
        var provider = new firebase.auth.GoogleAuthProvider();        
        firebase.auth().signInWithRedirect(provider);
    });

    //facebook login
    $("#facebook").on("click", function() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    });

    //sign out
    $("#sign-out").on("click", function(){
        event.preventDefault();    
        firebase.auth().signOut().then(function() {

            // console.log("signed out!");
            }).catch(function(error) {
            console.log("something happened with sign out.");
        });
    });

    //listens for changes to user sign in status
    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {   
            $(".display-user").empty();            
            $(".display-user").text(user.displayName); 
            console.log(user); 
        } else{
            $(".display-user").text();
            console.log("no user!");
        }
    });

    //for api calls to user sign in methods
    firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        console.log(result);
        var user = result.user;
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});




