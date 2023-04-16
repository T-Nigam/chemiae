const firebaseConfig = {
    apiKey: "AIzaSyC5P4An8O-A-3ZSme0fvqEV8lJsS2dPh40",
    authDomain: "chemiae.firebaseapp.com",
    projectId: "chemiae",
    storageBucket: "chemiae.appspot.com",
    messagingSenderId: "942176952217",
    appId: "1:942176952217:web:fa9d3b722e1236784b3d08",
    measurementId: "G-HKC5BTZMCH"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth(app);
    
    function createAccount(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            window.user = userCredential.user;
            console.log(userCredential)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
          });  
    }

    document.getElementById("signUp").addEventListener('click',createAccount);

    document.getElementById("goBack").addEventListener('click', function r(){
        window.location.replace("index.html");
    });

