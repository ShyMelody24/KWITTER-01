
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCuEh9sALM-wuWmF9EXn0QW3_vy9Myevfc",
      authDomain: "kwitter-36ba5.firebaseapp.com",
      databaseURL: "https://kwitter-36ba5-default-rtdb.firebaseio.com",
      projectId: "kwitter-36ba5",
      storageBucket: "kwitter-36ba5.appspot.com",
      messagingSenderId: "255147075740",
      appId: "1:255147075740:web:93a08a430af594ca1d2559"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
