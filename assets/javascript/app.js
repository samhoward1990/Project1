// Intialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyATFDUF2_xSvh_GtpEHJyy6zvdeMUUoXaA",
    authDomain: "continuum-7ea8b.firebaseapp.com",
    databaseURL: "https://continuum-7ea8b.firebaseio.com",
    projectId: "continuum-7ea8b",
    storageBucket: "",
    messagingSenderId: "755582892592",
    appId: "1:755582892592:web:a171da16a813efa4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// stored the database as a variable
var database = firebase.database();
// watch for on click on form submit button
$("#submit").on("click", function (event) {
    event.preventDefault();
    var firstName = $("#first-name").val().trim();
    var lastName = $("#last-name").val().trim();
    var email = $("#email").val().trim();
    var destination = $("#destination").val();
    var speed = $("#speed").val();

    database.ref().push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        destination: destination,
        speed: speed
    })

});
$(document).ready(function () {

    // var queryURL = "https://images-api.nasa.gov/search?q="
    // + searchLocation 

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyBwnn85wMUw6B5v3IqxC2R54yYytQu2ChQ"




        // destination 
        ;



    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data;

        });




});