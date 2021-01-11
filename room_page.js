
var firebaseConfig = {
      apiKey: "AIzaSyBHotio-NQjAoguQaO4aP1UKBCMqLfb_Eg",
      authDomain: "lets-chat-f99ef.firebaseapp.com",
      databaseURL: "https://lets-chat-f99ef-default-rtdb.firebaseio.com",
      projectId: "lets-chat-f99ef",
      storageBucket: "lets-chat-f99ef.appspot.com",
      messagingSenderId: "267873514729",
      appId: "1:267873514729:web:bb71707c750eb32bcaac78",
      measurementId: "G-4FRZCK513Q"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){

window.location="login.html"

}
