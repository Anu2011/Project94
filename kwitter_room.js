
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDj73Ioxtz2SDkZhX53p2cIfK2DWIQy18M",
    authDomain: "kwitter-edcca.firebaseapp.com",
    databaseURL: "https://kwitter-edcca-default-rtdb.firebaseio.com",
    projectId: "kwitter-edcca",
    storageBucket: "kwitter-edcca.appspot.com",
    messagingSenderId: "1027690534837",
    appId: "1:1027690534837:web:f9002d0b7eefd66aa3ebfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();